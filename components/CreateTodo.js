import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
  });

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, "todos"), todo);
    setTodo({
      title: "",
      detail: "",
    });
  };

  return (
    <div>
      <form>
        <div className="title">
          <label>Title: </label>
          <br />
          <input
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            type="text"
            placeholder="Enter the title"
            value={todo.title}
          ></input>
        </div>
        <div className="title">
          <label>Detail: </label>
          <br />
          <textarea
            onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
            value={todo.detail}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Add Todo</button>
      <p>{JSON.stringify(todo)}</p>
    </div>
  );
}
