export const verifyJWT = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (data.status === "success") {
    return true;
  } else {
    localStorage.removeItem("token");
    return false;
  }
};
