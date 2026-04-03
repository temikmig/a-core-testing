import { useForm } from "react-hook-form";
import type { LoginVars } from "./types";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "@/shared/config";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { handleLogin, loading } = useLogin();

  const form = useForm<LoginVars>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginVars) => {
    try {
      await handleLogin(data.email, data.password);
      navigate("/");
    } catch (e) {
      form.setError("password", {
        type: "manual",
        message: getErrorMessage(e),
      });
    }
  };

  return {
    ...form,
    loading,
    onSubmit,
  };
};
