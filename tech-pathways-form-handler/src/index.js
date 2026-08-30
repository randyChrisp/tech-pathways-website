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

		const paBody = await paRes.text();

		if (!paRes.ok) {
			console.error(`PA_WORKFLOW responded ${paRes.status}: ${paBody}`);
			return new Response(
				JSON.stringify({ error: `Workflow failed (${paRes.status})`, detail: paBody }),
				{
					status: 500,
					headers: {
						'Content-Type': 'application/json',
						...corsHeaders(requestOrigin),
					},
				}
			);
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
