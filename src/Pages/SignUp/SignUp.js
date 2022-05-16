import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../Hooks/SocialLogin";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Hooks/Loading";

const SignUp = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  let signInError;

  if (loading || updating) {
    return <Loading />;
  }
  if (error || updateError) {
    signInError = <p className="text-red-500">{error?.message}</p>;
  }

  return (
    <div className="hero min-h-screen">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center text-2xl">Sign Up</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
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

              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
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

              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <div className="form-control mt-6">
              <button className="btn btn-accent">Sign Up</button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center mt-3">
              <small className="text-accent mr-1">New to Doctors Portal?</small>
              <small
                onClick={() => navigate("/login")}
                className="text-primary cursor-pointer"
              >
                Already have an account
              </small>
            </div>
          </form>

          <div className="divider">OR</div>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
