import * as Yup from "yup";

export interface RegisterStateProps {
  fullname: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export const initialState: RegisterStateProps = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string().email("Enter valid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
