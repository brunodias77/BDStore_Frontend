export const API_URL = "https://localhost:7269/api";

export function USER_LOGIN() {
  return {
    url: API_URL + "/users/login",
  };
}
