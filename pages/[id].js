import { getDoc, doc} from "firebase/firestore"
import { db } from '@/firebase';
import { useState } from 'react';

export const getServerSideProps =async (context) => {
    // console.log(context)
    const id = context.query.id;
    // console.log(id)
    const docSnap = await getDoc(doc(db, "todos", id))
    const data = docSnap.data()

    return {
        props: {
            data
        }
    }
}

export default function Todo({ data }) {
  
  return (
    <div className="container">
      <h1>Todo title: {data.title}</h1>
      <h2>Todo detail: {data.detail}</h2>
    </div>
  )
}
// import { useRouter } from 'next/router'
// import { getDoc, doc} from "firebase/firestore"
// import { db } from '@/firebase';
// import { useState } from 'react';

// export default function Todo() {
//     const [todo, setTodo] = useState({})

//     const router = useRouter()
//     const id = router.query.id;
//     // const {id} = router.query;

//     const getData = async() => {
//         const docSnap = await getDoc(doc(db, "todos", id));
//         const data = docSnap.data()
//         setTodo(data)
//     }
//     getData()



//   return (
//     <div className="container">
//       <h1>Todo title: {todo.title}</h1>
//       <h2>Todo detail: {todo.detail}</h2>
//     </div>
//   )
// }
