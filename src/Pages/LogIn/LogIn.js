import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../Hooks/SocialLogin";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Hooks/Loading";

const LogIn = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };

  if (loading) {
    return <Loading />;
  }

  let logInError;
  if (error) {
    logInError = <p className="text-red-500">{error?.message}</p>;
  }

  if (user) {
    navigate("/");
  }

  return (
    <div class="hero min-h-screen">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center text-2xl">Login</h2>
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "please provide a valid email",
                  },
                })}
              />

              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Minimum six characters, at least one letter and one number",
                  },
                })}
              />

              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
              </label>
            </div>

            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {logInError}
            <div class="form-control mt-6">
              <button class="btn btn-accent">Login</button>
            </div>
            <div className="flex justify-center mt-3">
              <small className="text-accent mr-1">New to Doctors Portal?</small>
              <small
                onClick={() => navigate("/signup")}
                className="text-primary cursor-pointer"
              >
                Create new account
              </small>
            </div>
          </form>

          <div class="divider">OR</div>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
