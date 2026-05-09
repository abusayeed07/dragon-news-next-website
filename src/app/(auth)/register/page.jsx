"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Added
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  const router = useRouter(); // ✅ Added
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });

    console.log(res, error);

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success(`Welcome ${name}! Your account has been created.`);
      // Redirect to login page after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      {/* Form Card */}
      <div className="container mx-auto max-w-[752px] bg-base-100 rounded-xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-base-content">
            Create an Account
          </h2>
          <div className="flex w-full flex-col mt-4">
            <div className="divider divider-primary">Join Dragon News</div>
          </div>
          <p className="text-base-content/70 mt-2">
            Fill in your details to get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(handleRegisterFunc)}>
          {/* Name Field */}
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="input input-bordered w-full focus:input-primary transition-all bg-base-200"
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <span className="text-error text-xs mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label" htmlFor="photo">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="url"
              id="photo"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full focus:input-primary transition-all bg-base-200"
              {...register("photo", {
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                  message: "Please enter a valid image URL",
                },
              })}
            />
            {errors.photo && (
              <span className="text-error text-xs mt-1">
                {errors.photo.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="input input-bordered w-full focus:input-primary transition-all bg-base-200"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-error text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:input-primary transition-all bg-base-200 pr-12"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      "Password must contain uppercase, lowercase, and number",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-base-content transition-colors"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            {errors.password && (
              <span className="text-error text-xs mt-1">
                {errors.password.message}
              </span>
            )}
            <span className="text-xs text-base-content/50 mt-1">
              Password must be at least 8 characters including a number and a
              lowercase letter.
            </span>
          </div>

          {/* Accept Terms & Conditions */}
          <div className="form-control">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("acceptTerms", {
                  required: "You must accept the terms and conditions",
                })}
                className="checkbox checkbox-primary checkbox-sm"
              />
              <span className="text-sm text-base-content/70">
                I accept the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.acceptTerms && (
              <span className="text-error text-xs mt-1">
                {errors.acceptTerms.message}
              </span>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full py-3 h-12 font-semibold text-lg"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-base-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-base-100 text-base-content/50">
              Or sign up with
            </span>
          </div>
        </div>

        {/* Social Sign Up Buttons */}
        <div className="space-y-3">
          {/* Google */}
          <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5] w-full">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>

          {/* GitHub */}
          <button onClick={handleGitHubSignin} className="btn bg-black text-white border-black w-full">
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Continue with GitHub
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-base-content/70 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold hover:underline transition-colors"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
