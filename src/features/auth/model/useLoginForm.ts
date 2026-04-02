import { useForm } from "react-hook-form";
import type { LoginVars } from "./types";
import { useLogin } from "./useLogin";

export const useLoginForm = () => {
  const { handleLogin, loading } = useLogin();

  const form = useForm<LoginVars>({
    defaultValues: {
      email: "admin@admin.com",
      password: "admin",
    },
  });

  const onSubmit = async (data: LoginVars) => {
    await handleLogin(data.email, data.password);
    // дальше позже добавим navigate("/")
  };

  return {
    ...form,
    loading,
    onSubmit,
  };
};
