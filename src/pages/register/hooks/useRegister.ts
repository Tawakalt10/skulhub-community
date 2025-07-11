import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import {
  type RegisterStateProps,
  initialState,
  validationSchema,
} from "../register.constants";

function useRegister() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterStateProps>({
    defaultValues: initialState,
    resolver: yupResolver(validationSchema),
  });

  async function handleRegister(data: RegisterStateProps) {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Registered:", data);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert("Signup failed");
    }
  }

  return {
    control,
    isPending: isSubmitting,
    handleSubmit,
    handleRegister,
  };
}

export default useRegister;
