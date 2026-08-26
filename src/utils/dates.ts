export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(typeof date === "string" ? new Date(date) : date);
}

export function isoDate(date: Date | string) {
  return (typeof date === "string" ? new Date(date) : date).toISOString();
}
