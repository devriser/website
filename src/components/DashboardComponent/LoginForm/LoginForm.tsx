"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormInput from "@/components/shared/FormComponents/formInput/FormInput";
import Button from "@/components/shared/Button";
import loginImage from "@/assets/images/loginImage.webp";
import Image from "next/image";
import darkLogo from "@/assets/images/devriserDarkLogo.png";
import lightLogo from "@/assets/images/devriserLightLogo.png";
import { useTheme } from "next-themes";

export type FormType = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const themes = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>();

  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);

  const hasToken = document.cookie.includes("token=");

  useEffect(() => {
    // Redirect to the dashboard if the user is already logged in
    if (hasToken) {
      router.push("/web-dashboard/home");
    }
  }, [hasToken, router]);

  const handleLogin = async (data: FormType) => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();

        document.cookie = `token=${responseData.token}; Path=/; Secure; SameSite=Lax; HttpOnly`;

        const email = responseData.email;

        if (email === "admin@example.com") {
          router.push("/web-dashboard/home");
        } else {
          router.push("/web-dashboard/home");
        }
      } else {
        const responseData = await response.json();
        setLoginError(responseData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("An unexpected error occurred. Please try again.");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(handleLogin)();
    }
  };

  return (
    <div className="flex w-full">
      <Image
        alt="login image"
        src={loginImage}
        className="h-screen w-[50%] flex-1 object-cover"
      />
      <form
        className="flex flex-col justify-center items-center w-full gap-4 flex-[1]"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          handleSubmit(handleLogin)();
        }}
      >
        <div className="w-[50%] flex flex-col gap-4 ">
          <div className="flex items-center justify-center">
            {themes.theme === "dark" ? (
              <Image
                alt="devriser logo"
                src={lightLogo}
                height={100}
                width={100}
                className="animate-pulse"
              />
            ) : (
              <Image
                alt="devriser logo"
                src={darkLogo}
                height={100}
                width={100}
                className="animate-pulse"
              />
            )}
          </div>
          <FormInput
            label="Email"
            labelColumn
            placeHolder="email"
            type="email"
            registerValue="email"
            register={register}
            registerReq={true}
            error={errors.email}
            dashboard
          />

          <FormInput
            label="Password"
            labelColumn
            placeHolder="password"
            type="password"
            registerValue="password"
            register={register}
            error={errors.password}
            registerReq={true}
            onKeyDown={() => handleKeyPress}
            dashboard
          />
        </div>
        <div className="w-[50%]">
          <Button
            type="submit"
            variant="success"
            style="solid"
            buttonSize="full"
            loading={isSubmitting}
            onMouseEnter={() => handleKeyPress}
          >
            Login
          </Button>
        </div>

        {loginError && (
          <p className="text-red-500 text-sm mt-2">{loginError}</p>
        )}
      </form>
    </div>
  );
}
