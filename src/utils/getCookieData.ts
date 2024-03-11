import { cookies } from "next/headers";

export default function getCookieData() {
  const cookieStore = cookies();
  const name = cookieStore.get("name")?.value;
  const userType = cookieStore.get("_ut")?.value as "admin" | "user";
  const token = cookieStore.get("token")?.value;
  const userId = cookieStore.get("_id")?.value;
  return { name, userType, token, userId };
}
