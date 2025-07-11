import * as Yup from "yup";

export interface LoginStateProps {
  email: string;
  password: string;
}

export const initialState: LoginStateProps = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
