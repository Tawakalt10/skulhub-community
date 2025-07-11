import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { validationSchema, initialState, type LoginStateProps } from "../login.constants";

function useLogin() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginStateProps>({
    defaultValues: initialState,
    resolver: yupResolver(validationSchema),
  });

  async function handleLogin(data: LoginStateProps) {
    try {
      // Simulate login request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Logged in:", data);

      // Simulate storing a token
      localStorage.setItem("sku_session", "demo-token");

      // Navigate to dashboard
      navigate("/dashboard");

      // Optional: show toast
      alert("Login successful");
    } catch (error) {
      alert("Login failed");
    }
  }

  return {
    control,
    handleSubmit,
    handleLogin,
    isPending: isSubmitting,
  };
}

export default useLogin;
