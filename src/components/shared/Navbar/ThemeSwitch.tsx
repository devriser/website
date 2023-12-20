import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();




  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    setTheme(savedTheme || 'light');
    setMounted(true);
  }, [setTheme]);
  

  if (!mounted) {
    return null;
  }

  function handleChange(e: any) {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
  }

  return (
    <select value={theme} onChange={handleChange}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};

export default ThemeSwitch;


