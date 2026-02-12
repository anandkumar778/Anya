"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  city: string;
  company: string;
  address: string;
  website: string;
  product: string;
  message: string;
  file: FileList;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Form Submitted Successfully ✅");
    reset();
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2E8C]">
            CONTACT US
          </h1>
          <div className="w-20 md:w-24 h-1 bg-[#1F2E8C] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-5 text-sm sm:text-base max-w-2xl mx-auto">
            Have a question or collaboration opportunity? Fill out the form
            below and our team will respond within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 p-5 sm:p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

            <InputField
              placeholder="Contact Name *"
              register={register("name", { required: "Name is required" })}
              error={errors.name?.message}
            />

            <InputField
              type="email"
              placeholder="Email Address *"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter valid email",
                },
              })}
              error={errors.email?.message}
            />

            <InputField
              type="tel"
              placeholder="Mobile Number *"
              register={register("mobile", {
                required: "Mobile number is required",
                minLength: {
                  value: 10,
                  message: "Enter valid mobile number",
                },
              })}
              error={errors.mobile?.message}
            />

            {/* City */}
            <div>
              <select
                {...register("city", { required: "City is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1F2E8C]"
              >
                <option value="">Select Your City *</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Chennai</option>
              </select>
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>

            <InputField
              placeholder="Company Name *"
              register={register("company", { required: "Company name is required" })}
              error={errors.company?.message}
            />

            <InputField
              placeholder="Postal Address *"
              register={register("address", { required: "Address is required" })}
              error={errors.address?.message}
            />

            <InputField
              placeholder="Website *"
              register={register("website", { required: "Website is required" })}
              error={errors.website?.message}
            />

            <InputField
              placeholder="Product / Solution of Interest *"
              register={register("product", { required: "This field is required" })}
              error={errors.product?.message}
            />

            {/* File Upload */}
            <div className="md:col-span-2">
              <input
                type="file"
                {...register("file", {
                  required: "File is required",
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1F2E8C]"
              />
              {errors.file && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.file.message as string}
                </p>
              )}
            </div>

          </div>

          {/* Message */}
          <div className="mt-6">
            <textarea
              rows={5}
              placeholder="Write Message *"
              {...register("message", { required: "Message is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1F2E8C]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#1F2E8C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-md"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* Reusable Input Component */
function InputField({
  placeholder,
  register,
  error,
  type = "text",
}: any) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1F2E8C]"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
