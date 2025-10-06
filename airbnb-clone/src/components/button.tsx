import type { BtnProps } from "../types/componentTypes";

const Button = ({name, isAlt}:BtnProps) => {
    return ( 
        <button className={`px-6 py-2 ${isAlt ? "bg-black text-white hover:text-black hover:border-black hover:bg-none" :"bg-white text-black hover:text-white border-2 border-white hover:bg-transparent"} rounded-md duration-300 ease-in-out`}>
            {name}
        </button>
     );
}
 
export default Button;