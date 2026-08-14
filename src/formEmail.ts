import type { FormEvent } from "react";

export const formInboxEmail = "info@techpathwaysinitiative.org";

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

export function sendFormAsEmail(formName: string, event: FormEvent<HTMLFormElement>) {
  const formData = new FormData(event.currentTarget);
  const entries = Array.from(formData.entries())
    .filter(([, value]) => typeof value === "string" && value.trim().length > 0)
    .map(([name, value]) => ({
      label: formatFieldName(String(name)),
      value: String(value).trim(),
    }));

  const bodyLines = [
    `Hello Tech Pathways Initiative,`,
    "",
    `A new ${formName} submission was received.`,
    "",
    ...entries.map(({ label, value }) => `${label}: ${value}`),
    "",
    `Submitted at: ${new Date().toLocaleString()}`,
    "",
    "Best regards,",
    "Tech Pathways Initiative website",
  ];

  const subject = encodeURIComponent(`${formName} Submission`);
  const body = encodeURIComponent(bodyLines.join("\n"));

  window.location.href = `mailto:${formInboxEmail}?subject=${subject}&body=${body}`;
}
