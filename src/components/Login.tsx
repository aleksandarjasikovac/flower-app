import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { GrClose } from "react-icons/gr";

interface ToggleModal {
  modal: any;
}

export const Login = ({ modal }: ToggleModal) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    // interact with the backend
    axios
      .post("https://flowrspot-api.herokuapp.com/api/v1/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="absolute top-0 z-10 h-screen w-screen flex justify-center items-center p-6 flex-col">
      <div
        onClick={modal}
        className=" absolute w-screen h-screen bg-black/60"
      />
      <div className="z-10 flex justify-center flex-col">
        <div className=" w-500 bg-white p-8 rounded-md">
          <div>
            <button onClick={modal} className="w-full flex justify-end">
              <GrClose />
            </button>
          </div>
          <h1 className="text-2xl font-semibold pb-8 text-center">
            Create An Account
          </h1>
          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <input
                  className="h-12 w-full border-1 border bg-gray-50 pl-3 rounded-sm"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-span-2">
                <input
                  className="h-12 w-full border-1 border bg-gray-50 pl-3 rounded-sm"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="col-span-2 mt-4">
                <button
                  type="submit"
                  className="bg-primary w-full py-4 text-white rounded-sm"
                >
                  Login to your Account
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-4 text-white flex justify-center">
          <button onClick={modal} className="hover:text-primary ">
            I don't want to login
          </button>
        </div>
      </div>
    </div>
  );
};
