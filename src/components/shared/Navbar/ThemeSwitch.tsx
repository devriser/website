import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { DarkMode, LightMode, SystemMode } from "@/assets/svg/HeaderSvg";

const ThemeSwitch = ({ params }: any) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    setTheme(savedTheme || "light");
    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  function handleChange(selectedTheme: any) {
    setTheme(selectedTheme);
    localStorage.setItem("selectedTheme", selectedTheme);
    setToggle(false);
  }

  const variants = {
    open: { opacity: 1, x: 10 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="  cursor-pointer flex items-center"
        onClick={() => setToggle(!toggle)}
      >
        {theme === "system" ? (
          <SystemMode />
        ) : theme === "dark" ? (
          <DarkMode />
        ) : (
          theme === "light" && <LightMode />
        )}
      </div>
      {toggle && (
        <motion.div
          initial={
            params.lang === "ar"
              ? { x: 10, opacity: 0 }
              : { x: -10, opacity: 0 }
          }
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute -top-24 left-[65px] w-30 bg-secondary   rounded overflow-hidden z-10"
        >
          <div className="flex flex-col p-1 gap-1">
            <motion.div
              onClick={() => handleChange("system")}
              className="cursor-pointer flex items-center gap-1 hover:bg-primary rounded-medium px-3 py-2"
            >
              <SystemMode />
              System
            </motion.div>
            <motion.div
              onClick={() => handleChange("dark")}
              className="  cursor-pointer flex items-center gap-1 hover:bg-primary rounded-medium px-3 py-2"
            >
              <DarkMode /> Dark
            </motion.div>
            <motion.div
              onClick={() => handleChange("light")}
              className=" cursor-pointer flex items-center gap-1 hover:bg-primary rounded-medium px-3 py-2"
            >
              <LightMode />
              Light
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitch;
