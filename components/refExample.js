import { useEffect, useRef } from "react"

const RefExample = () => {
    const inputRef = useRef(null);
    const HandleClick = () => {
        inputRef.current.focus();
    };
    useEffect (() => {
        inputRef.current?.focus();
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick = {HandleClick} >фокус</button>
                   </div>
    );
};

export default RefExample;