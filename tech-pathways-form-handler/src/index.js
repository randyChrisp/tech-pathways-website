export class MyWorkFlow {
	constructor(state, env) {
		this.state = state;
		this.env = env;
	}

	async fetch(request) {
		return new Response('MyWorkFlow is running', { status: 200 });
	}
}

export class WorkflowStatusDO {
	constructor(state, env) {
		this.state = state;
		this.env = env;
	}

	async fetch(request) {
		return new Response('WorkflowStatusDO is running', { status: 200 });
	}
}

export default {
	async fetch(request, env) {
		const requestOrigin = request.headers.get('Origin') || '*';

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: corsHeaders(requestOrigin),
			});
		}

		if (request.method !== 'POST') {
			return new Response('Method not allowed', {
				status: 405,
				headers: corsHeaders(requestOrigin),
			});
		}

		let payload;
		try {
			payload = await request.json();
		} catch {
			return new Response('Invalid JSON', {
				status: 400,
				headers: corsHeaders(requestOrigin),
			});
		}

		const { formName, submittedAt, fields } = payload || {};

		const normalized = {};
		for (const [key, value] of Object.entries(fields || {})) {
			normalized[String(key).toLowerCase()] = value;
		}

		const body = {
			name: normalized['full name'] || normalized['name'] || normalized['your name'] || '',
			email: normalized['email address'] || normalized['email'] || '',
			phone: normalized['phone'] || normalized['phone number'] || '',
			message:
				`[${formName || 'Form Submission'} — ${submittedAt || new Date().toISOString()}]\n\n` +
				(normalized['message'] || normalized['interest'] || normalized['tell us more'] || JSON.stringify(fields || {})),
			consent: false,
		};

		const paRes = await fetch(env.PA_WORKFLOW, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		if (!paRes.ok) {
			const err = await paRes.text();
			return new Response(`Workflow failed: ${err}`, {
				status: 500,
				headers: corsHeaders(requestOrigin),
			});
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				...corsHeaders(requestOrigin),
			},
		});
	},
};

function corsHeaders(origin) {
	return {
		'Access-Control-Allow-Origin': origin === 'null' ? '*' : origin,
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
	};
}
