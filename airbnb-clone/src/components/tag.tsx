import type { TagProps } from "../types/componentTypes";

import dropdown from "../assets/icons/drop.svg"

const Tags = ({name, hasIcon}:TagProps) => {
    return ( 
        <div className="px-6 py-2 bg-white rounded-full shadow-sm flex items-center space-x-4">
            <p>{name}</p>
            {hasIcon && <img src={dropdown} />}
        </div>
     );
}
 
export default Tags;