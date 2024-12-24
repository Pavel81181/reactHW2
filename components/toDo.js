import { useState } from "react";

function ToDoList() {

    const [txt, setTxt] = useState("");
    const [arr, setArr] = useState(["#1", "#2"]);

    function clickHandler() {
        if (!txt.trim()) {
            return;
        }
        setArr([...arr,txt]);
        setTxt ("");
        
    }


    return ( 
        <>
            <label htmlFor="input"> введите текст: </label>
            <input
            onChange={(event) => setTxt(event.target.value)}
            type = "text"
            id = "input"
            value = {txt}
            >         
            </input>

            <button onClick={clickHandler} > Добавить </button>
            <ul>
                {arr.map((item) => (
                    <li key={arr.indexOf(item)}>
                            {item}
                    </li>
                ) )}
            </ul>
        </>
     );
}

export default ToDoList;