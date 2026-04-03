import { useMutation } from "@apollo/client/react";
import { LOGIN } from "./login.query";
import type { LoginResponse, LoginVars } from "./types";

export const useLogin = () => {
  const [login, state] = useMutation<LoginResponse, LoginVars>(LOGIN);

  const handleLogin = async (email: string, password: string) => {
    const res = await login({
      variables: { email, password },
    });

    const token = res.data?.login?.token;
    const user = res.data?.login?.user;

    if (!token || !user) {
      throw new Error("Invalid login response");
    }

    localStorage.setItem("token", token);

    return user;
  };

  return { handleLogin, ...state };
};
