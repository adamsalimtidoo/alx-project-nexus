import type { BtnProps } from "../types/componentTypes";

const Button = ({name, isAlt}:BtnProps) => {
    return ( 
        <button className={`px-6 py-2 ${isAlt ? "bg-black text-white" :"bg-white text-black"} rounded-md`}>
            {name}
        </button>
     );
}
 
export default Button;