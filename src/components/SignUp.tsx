import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  password: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <div className="h-screen w-screen flex justify-center items-center p-6 flex-col">
      <div className="w-500  bg-gray-100 p-8">
        <h1 className="text-2xl font-semibold pb-6 text-center">
          Create An Account
        </h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <input
                className="h-12 w-full border-1 border bg-gray-50 pl-3 rounded-sm"
                {...register("first_name", {
                  required: "This field is required",
                })}
                placeholder="First Name"
                id="firstName"
              />
              {errors.first_name && (
                <span className="text-xs text-red-500">
                  {errors.first_name.message}
                </span>
              )}
            </div>
            <div className="">
              <input
                className="h-12 w-full border-1 border bg-gray-50 pl-3 rounded-sm"
                {...register("last_name", {
                  required: "This field is required",
                })}
                placeholder="Last Name"
                id="lastName"
              />
              {errors.last_name && (
                <span className="text-xs text-red-500">
                  {errors.last_name.message}
                </span>
              )}
            </div>

            <div className="col-span-2">
              <input
                className="h-12 w-full border-1 border bg-gray-50 pl-3 rounded-sm"
                {...register("date_of_birth", {
                  required: "This field is required",
                })}
                placeholder="Date of birth"
                id="age"
              />
              {errors.date_of_birth && (
                <span className="text-xs text-red-500">
                  {errors.date_of_birth.message}
                </span>
              )}
            </div>
            <div className="col-span-2">
              <input
                className="h-12 w-full border-1 border bg-gray-50 pl-3 rounded-sm"
                {...register("email", { required: "This field is required" })}
                placeholder="Email Address"
                id="email"
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="col-span-2">
              <input
                className="h-12 w-full border-1 border bg-gray-50 pl-3 rounded-sm"
                {...register("password", {
                  required: "This field is required",
                })}
                placeholder="Password"
                id="password"
                type="password"
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-primary w-full py-4 text-white rounded-sm"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
      <button className="pt-8">I don't want to register</button>
    </div>
  );
}
