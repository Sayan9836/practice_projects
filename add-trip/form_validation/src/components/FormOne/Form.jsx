import React from "react";
import { useForm } from "react-hook-form";
function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onsubmit = (data) => {
    setTimeout(() => {
      const hobbies = Object.keys(data.hobbies).filter(
        (key) => data.hobbies[key],
      );
      delete data.hobbies;
      const result = { ...data, hobbies };
      console.log(result);
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="form">
      <div>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="username"
        />
        {errors.username && <p>username is required!</p>}
      </div>

      <div>
        <input
          type="password"
          {...register("password", { required: true, pattern: "" })}
          placeholder="password"
        />
        {errors.password && <p>password is required!</p>}
      </div>

      <div>
        <div>
          <label htmlFor="">Cricket</label>
          <input type="checkbox" {...register("hobbies.cricket")} />
        </div>
        <div>
          <label htmlFor="">Football</label>
          <input type="checkbox" {...register("hobbies.football")} />
        </div>
      </div>

      <div>
        <div>
          <label>Male</label>
          <input
            type="radio"
            value="Male"
            name="gender"
            {...register("gender", { required: true })}
          />
        </div>
        <div>
          <label>Female</label>
          <input
            type="radio"
            value="Female"
            name="gender"
            {...register("gender", { required: true })}
          />
        </div>
        {errors.gender && <p>gender is required!</p>}
      </div>
      <input type="submit" value={isSubmitting ? "....submitting" : "Submit"} />
    </form>
  );
}

export default Form;
