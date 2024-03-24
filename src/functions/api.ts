export const API_URL = "https://localhost:7269/api";

export function USER_LOGIN() {
  return {
    url: API_URL + "/users/login",
  };
}

export function USER_REGISTER_POST() {
  return {
    url: API_URL + "/users/signup",
  };
}

export function PRODUCTS_GET() {
  return {
    url: API_URL + "/catalog/products",
  };
}
