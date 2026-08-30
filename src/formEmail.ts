import type { FormEvent } from "react";

const workerUrl = import.meta.env.VITE_CF_WORKER_URL as string;

function formatFieldName(name: string) {
  const cleaned = name
    .replace(/^[^-_]+[-_]?/, "")
    .replace(/[-_]+/g, " ")
    .trim();

  if (!cleaned) {
    return "Field";
  }

  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

export async function sendFormAsEmail(
  formName: string,
  event: FormEvent<HTMLFormElement>
): Promise<void> {
  const formData = new FormData(event.currentTarget);
  const fields: Record<string, string> = {};

  for (const [name, value] of formData.entries()) {
    if (typeof value === "string" && value.trim().length > 0) {
      fields[formatFieldName(name)] = value.trim();
    }
  }

  const payload = {
    formName,
    submittedAt: new Date().toLocaleString(),
    fields,
  };

  const response = await fetch(workerUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Your form could not be submitted. Please try again.");
  }
}
