import React, { useEffect, useState } from "react";

const DarkMode = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        console.log("ivan");
    }

    return (
        <div>
            <button onClick={handleThemeSwitch} type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-900 text-white">Rounded</button>
        </div>
    );
};

export default DarkMode;