import { useState, useEffect } from "react";
import Home from "./Components/Home";
import { Switch } from "antd";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
        <h1 className="text-xl font-semibold dark:text-white">
          Product Catalog
        </h1>
        <div>
          <span className="mr-2 text-gray-700 dark:text-white">Dark Mode</span>
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
      </header>

      <Home />
    </div>
  );
};

export default App;
