import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Hooks/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "55d97a6b011b67c561e8c1314e9effca";

  const { data: services, isLoading } = useQuery("service", () =>
    fetch("https://damp-garden-09664.herokuapp.com/service").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };

          fetch("https://damp-garden-09664.herokuapp.com/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((doctors) => {
              if (doctors.insertedId) {
                toast.success("successfully doctor added");
                reset();
              } else {
                toast.error("failed to added doctor");
              }
              console.log(doctors);
            });
          console.log(img);
        }
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-2xl text-secondary text-center">Add Doctor</h2>
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
                <span className="label-text">specialty</span>
              </label>

              <select
                {...register("specialty")}
                class="select select-bordered w-full max-w-xs"
              >
                {services.map((service) => (
                  <option key={service._id} value={service.name}>
                    {service?.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Uploading your picture*</span>
              </label>
              <input
                type="file"
                className="input w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "photo is required",
                  },
                })}
              />

              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image?.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-accent">ADD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
