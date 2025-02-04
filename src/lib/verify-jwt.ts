import { API } from "@/api";

export const verifyJWT = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  const { success, data } = await API.Verify();

  if (success && data.status === "verified") {
    return true;
  } else {
    localStorage.removeItem("token");
    return false;
  }
};
