import { useState } from "react";

export default function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
  });

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
          <textarea onChange={e => setTodo({...todo, detail: e.target.value})} value={todo.detail}/>
        </div>
      </form>
      <button>Add Todo</button>
      <p>{JSON.stringify(todo)}</p>
    </div>
  );
}
