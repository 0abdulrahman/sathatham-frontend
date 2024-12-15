import "server-only";

import { cookies } from "next/headers";
import { TOKEN_NAME } from "../constants/api";

export const getAuthorizationHeader = () => {
  return {
    Authorization: `Bearer ${cookies().get(TOKEN_NAME)?.value}`,
  };
};
