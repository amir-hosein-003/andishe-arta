import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className="flex flex-row items-center justify-center gap-34 px-20 my-32">
      <div>
        <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-end gap-2">
                <img src="../public/img/Group-3.png" />
                <h3 className="text-2xl md:text-4xl">
                    <span className="font-bold"> از مشاوره رایگان </span>بهره مند شوید!
                </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-lg">برای مشاوره انتخاب محصولات مناسب برای پروژه خود، فـــرم زیر را پر کنید!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-16">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            {...register("userName", { required: true })}
            className="border border-gray-300 rounded-2xl py-5 px-3"
          />
          <input
            type="email"
            placeholder="آدرس ایمیل"
            {...register("email", { required: true })}
            className="border border-gray-300 rounded-2xl py-5 px-3"
          />
          <input
            type="text"
            placeholder="شماره تماس"
            {...register("phone", { required: true })}
            maxLength='11'
            className="border border-gray-300 rounded-2xl py-5 px-3"
          />

          <input
            type="submit"
            value={"دریافت مشاوره"}
            className="btn btn-primary rounded-2xl h-16"
          />
        </form>
      </div>
      <div className="hidden md:block">
        <img src="../public/img/suporte.png" alt="" />
      </div>
    </section>
  );
}
