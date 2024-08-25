import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required!"),
  password: Yup.string()
    .min(6, "password must be atleast 6 characters")
    .required("password is required!"),
  age: Yup.number()
    .integer("age must be an non decimal number!")
    .positive("age must be positive!")
    .required("age is required!"),
});

interface IformInputs {
  email: string;
  password: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const Onsubmit = (data: IformInputs) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(Onsubmit)}>
        <input
          type="text"
          placeholder="enter your email"
          {...register("email")}
        />
        {errors?.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="enter your password"
          {...register("password")}
        />
        {errors?.password && <p>{errors.password.message}</p>}

        <input type="text" placeholder="enter your age" {...register("age")} />
        {errors?.age && <p>{errors.age.message}</p>}

        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
