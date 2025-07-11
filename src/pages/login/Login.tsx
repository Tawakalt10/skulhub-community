import React from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

import InputField from "../../components/Forms/InputField";
import Button from "../../components/Button";
import Layout from "../../components/Auth/Layout";
import useLogin from "./hooks/useLogin";

const Login: React.FC = () => {
  const { control, isPending, handleSubmit, handleLogin } = useLogin();

  return (
    <Layout>
      <h3 className="text-[26px] font-extrabold text-[#ffffff]">Login</h3>
      <p className="text-[#fff] text-[16px]">
        Log into your Skuhub account by filling the information below
      </p>
      <form onSubmit={handleSubmit(handleLogin)} className="md:w-[70%] mt-9">
        <div className="w-full mt-6">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputField
                {...field}
                type="email"
                label="Enter email address*"
                error={error?.message}
              />
            )}
          />
        </div>
        <div className="w-full mt-6">
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputField
                {...field}
                type="password"
                label="Password*"
                error={error?.message}
              />
            )}
          />
        </div>
        <div className="mt-[3rem]">
          <Button
            text="Continue"
            position="center"
            width="w-full"
            background="bg-[#fff]"
            styles="w-full py-2"
            isLoading={isPending}
            type="submit"
          />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <p className="text-[#fff]">Not signed up? </p>
          <Link to="/register" className="text-white font-bold">
            Register with Skuhub now!
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
