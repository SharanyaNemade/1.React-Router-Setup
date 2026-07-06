import { useState } from "react";

    const useToggle = (defaultVal) =>{
        const[value,setValue] = useState(defaultVal);
    

    function toggleValue(val)
    {
        if(typeof val != 'boolean')
        {
            console.log("if");

            setValue(!value)
        }
        else{
            console.log("else");
            setValue(val)
        }
    }
    
    return [value, toggleValue];
}

export default useToggle;