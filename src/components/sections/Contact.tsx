import * as React from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="flex flex-col items-center">
      <h2 className="text-white text-5xl font-bold text-center mt-[100px] max-md:text-[40px] max-md:mt-10">
        Get in touch
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[753px]">
        <div className="flex max-w-full items-stretch gap-[37px] text-sm text-[#4F4F4F] font-bold flex-wrap mt-[82px] max-md:mt-10">
          <div className="flex flex-col items-stretch whitespace-nowrap text-center flex-1">
            <input
              {...register("firstName")}
              placeholder="Name"
              className="bg-transparent border-b border-[#4F4F4F] pb-2 text-white focus:outline-none focus:border-[#27AE60]"
            />
          </div>
          <div className="flex flex-col items-stretch flex-1">
            <input
              {...register("lastName")}
              placeholder="Last name"
              className="bg-transparent border-b border-[#4F4F4F] pb-2 text-white focus:outline-none focus:border-[#27AE60]"
            />
          </div>
        </div>

        <div className="flex max-w-full items-stretch gap-[37px] text-sm text-[#4F4F4F] font-bold flex-wrap mt-[47px] max-md:mt-10">
          <div className="flex flex-col items-stretch flex-1">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-[#4F4F4F] pb-2 text-white focus:outline-none focus:border-[#27AE60]"
            />
          </div>
          <div className="flex flex-col items-stretch flex-1">
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone number"
              className="bg-transparent border-b border-[#4F4F4F] pb-2 text-white focus:outline-none focus:border-[#27AE60]"
            />
          </div>
        </div>

        <textarea
          {...register("message")}
          placeholder="Message"
          className="text-[#4F4F4F] border border-[#4F4F4F] w-full text-sm font-bold mt-[47px] p-4 bg-transparent min-h-[120px] focus:outline-none focus:border-[#27AE60]"
        />

        <button
          type="submit"
          className="w-[143px] max-w-full text-sm text-white font-medium bg-[#27AE60] mt-[29px] px-8 py-3 hover:bg-[#219652] transition-colors"
        >
          Submit now
        </button>
      </form>
    </section>
  );
};
