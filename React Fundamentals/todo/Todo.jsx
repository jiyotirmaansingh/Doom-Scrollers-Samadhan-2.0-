import { useState } from "react";

export default function Todo() {
    const [text, setText] = useState("");
    const [todoarr, setTodoarr] = useState([]);

    const styles = {
        border: "1px solid black",
        padding: "20px",
        margin: "20px",
        textAlign: "center"
    };

    const handleText = (e) => setText(e.target.value);

    const handleTodo = () => {
        const todo = {
            id: Date.now(),
            title: text,
            status: text.length > 5 ? true : false
        };
        const newTodo = [...todoarr, todo];
        setTodoarr(newTodo); // typo fixed here
        setText("");
    };

    return (
        <>
            <input
                type="text"
                value={text}
                placeholder="Enter Text"
                onChange={handleText}
            />
            <button onClick={handleTodo}>Add Todo</button>
            <hr />
            {todoarr.map((el) => (
                <div key={el.id} style={styles}>
                    <h3>Id: {el.id}</h3>
                    <h4>Title: {el.title}</h4>
                    <h5>Status: {el.status ? "complete" : "incomplete"}</h5> 
                </div>
            ))}
        </>
    );
}