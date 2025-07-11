import React from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

import InputField from "../../components/Forms/InputField";
import Button from "../../components/Button";
import Layout from "../../components/Auth/Layout";
import useRegister from "./hooks/useRegister";

const Register: React.FC = () => {
  const { control, isPending, handleSubmit, handleRegister } = useRegister();

  return (
    <Layout>
      <h3 className="text-[26px] font-extrabold text-[#ffffff]">Sign Up</h3>
      <p className="text-[#fff] text-[16px]">
        Create a Skuhub account by filling your information below
      </p>
      <form onSubmit={handleSubmit(handleRegister)} className="md:w-[70%] mt-8">
        {[
          { name: "fullname", label: "Full Name" },
          { name: "username", label: "User Name" },
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
          { name: "confirmPassword", label: "Confirm Password", type: "password" },
        ].map(({ name, label, type = "text" }) => (
          <div className="w-full mt-6" key={name}>
            <Controller
              name={name as any}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  type={type}
                  label={label}
                  name={name}
                  error={error?.message}
                />
              )}
            />
          </div>
        ))}

        <p className="mt-9 text-white text-sm">
          By clicking continue, I agree to{" "}
          <a href="#" className="text-white font-bold underline">
            Skuhub’s terms and conditions
          </a>{" "}
          and I have read the{" "}
          <a href="#" className="text-white font-bold underline">
            privacy policy
          </a>
          .
        </p>

        <div className="w-full mt-9">
          <Button
            styles="py-3"
            text="Sign up"
            position="text-center"
            width="w-full"
            background="bg-white text-black"
            isLoading={isPending}
            disabled={isPending}
            type="submit"
          />
        </div>

        <div className="text-center mt-4 text-sm flex items-center gap-2 text-white">
          <p>Already have an account?</p>
          <Link to="/login" className="font-bold underline">
            Login
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default Register;
