import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { DarkMode, LightMode, SystemMode } from "@/assets/svg/HeaderSvg";

const ThemeSwitchMobile = () => {
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
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.3 }}
          className="absolute top-[6px] left-6 w-30   rounded overflow-hidden z-10"
        >
          <div className="flex p-1 gap-3">
            <motion.div
              onClick={() => handleChange("system")}
              className="cursor-pointer flex items-center gap-1 hover:bg-primary rounded-medium "
            >
              <SystemMode />
            </motion.div>
            <motion.div
              onClick={() => handleChange("dark")}
              className="  cursor-pointer flex items-center gap-1 hover:bg-primary rounded-medium "
            >
              <DarkMode />
            </motion.div>
            <motion.div
              onClick={() => handleChange("light")}
              className=" cursor-pointer flex items-center gap-1 hover:bg-primary rounded-medium "
            >
              <LightMode />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitchMobile;
