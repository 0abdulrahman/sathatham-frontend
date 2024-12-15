import { LoginResponse } from "../types/auth";
import { getAuthorizationHeader } from "../utils/get-authorization-header";

const baseURL = process.env.API;

export const loginWithToken = async () => {
  const response = await fetch(baseURL + "/auth/token", {
    cache: "no-store",
    headers: {
      ...getAuthorizationHeader(),
    },
  });

  const payload: APIResponse<LoginResponse> = await response.json();

  return payload;
};
