import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      // console.log(snapshot);
      setTodos(
        snapshot.docs.map((doc) => {
          console.log(doc.data());
          return {
            id: doc.id,
            title: doc.data().title,
            detail: doc.data().detail,
          };
        })
      );
    });
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul className="todoList">
        {todos.map((todo) => {
          return (<Link key={todo.id} href={"/" + todo.id} className="listItem__link">
            <li className="listItem">{todo.title}</li>
          </Link>)
        })}
        {/* <li className="listItem">{todos[0]?.detail}</li> */}
      </ul>
    </div>
  );
}
