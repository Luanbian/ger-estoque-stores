export let API_BASE_URL =
  import.meta.env.VITE_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export async function loadConfig(): Promise<void> {
  const res = await fetch(
    "https://luanbian.github.io/ger-estoque-config/data.json",
    { signal: AbortSignal.timeout(5000) },
  );
  if (!res.ok) throw new Error(`config request failed: ${res.status}`);

  const data: { url?: unknown } = await res.json();
  if (typeof data.url !== "string" || !data.url) {
    throw new Error("config without url");
  }
  API_BASE_URL = `${data.url}/api`;
}
