import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const useAuth = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const isLoggedIn = document.cookie.includes("token=");

    if (!isLoggedIn) {
      router.push("/web-dashboard");
    }
  }, [router]);
};

export default useAuth;
