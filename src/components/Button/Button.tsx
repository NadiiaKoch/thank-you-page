import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../../contexts/ThemeContext";

const Button: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} type="button">
      {theme === "dark" ? (
        <IoSunnyOutline className="text-indigo-600 w-6 h-6" />
      ) : (
        <IoMoonOutline className="text-indigo-600 w-6 h-6" />
      )}
    </button>
  );
};

export default Button;
