// utils/fetchWithAuthServer.ts

export async function fetchWithAuth(
  input: RequestInfo,
  init: RequestInit = {}
) {

  const headers = new Headers(init.headers || {});

  // Optional: ensure content-type for JSON body
  if (!headers.has("Content-Type") && init.body) {
    headers.set("Content-Type", "application/json");
  }

  return fetch(input, {
    ...init,
    headers,
    credentials: "include", // important for forwarding cookies
    cache: "no-store",       // optional: prevent stale cache
  });
}
