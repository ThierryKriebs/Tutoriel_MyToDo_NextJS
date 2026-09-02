"use client"
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link";

interface Todo {
    title: string;
    date: string;
}
//Méthode de récupération numéro 1
// const EditPage = async ({ searchParams } : { searchParams:Promise<{ id?: string }> }) => {
//                                             //  Promise<{ id?: string } est équivalent à Promise<{id: string | undefined }  
        
//     const { id: todoId } = await searchParams; //en NextJS 16, searchParams est devenue une promesse...
//                                                //const { id: todoId }  est une destructuration avec renommage! 
//                                                //Prends la propriété id de l’objet et place sa valeur dans une nouvelle constante appelée todoId
    
//     return (
//         <div>{ todoId } salut!!!</div>
//     )
// }

// Méthode de récupération numéro 2
const EditPage = () => {
    
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [todo, setTodo] = useState<Todo | undefined>(undefined); // la première fois, Todo est undefined

    const router = useRouter();
    
    const searchParams = useSearchParams();
    const todoId = searchParams.get("id");
    
    useEffect(() => {

        const getTodo = async () => {
            const response = await fetch(`/api/todos/${todoId}`);

            if (response.ok){
                const data = await response.json();
                console.log(data);
                setTodo(data);
                setTitle(data.title);
                setDate(data.date);
            } else {
                console.log("Problème lors de la récupération de la tâche!");
                router.push("/todos"); //redirection vers toutes les todos
            }
            

        }

        if (todoId) getTodo()

    }, [todoId, router]) 

    const handleEditTodo = () =>{

    }

    return todo ? (
        <>
            <form className="form" onSubmit={handleEditTodo}>
                <div className="title">
                    <h1>Modifier la tâche</h1>
                </div>
                <div className="align-horizontal">
                    <div className="todo-container">
                        <label className="placeholder">Todo</label>
                        <input
                            type="text"
                            value={title}
                            className="input"
                            placeholder="Indiquez une tâche"
                            autoComplete="off"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="date-container">
                        <label className="placeholder">Date</label>
                        <input
                            type="date"
                            value={date}
                            className="input"
                            placeholder="Indiquez une date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" className="btn-success">Modifier</button>
                    <Link className="redirect-link"href="/todos">Vers mes tâches</Link>
                </div>
            </form>
        </>
    ): <p>Veuillez patienter... </p>
}


export default EditPage