const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = data.error || data.detail || "Something went wrong";
    throw new Error(errorMsg);
  }

  return data;
}

export async function signupUser({ name, email, password }) {
  const res = await fetch(`${API_BASE_URL}/api/users/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  return handleResponse(res);
}

export async function loginUser({ email, password }) {
  const res = await fetch(`${API_BASE_URL}/api/users/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return handleResponse(res);
}
