'use client'

import Link from "next/link";
import { updateTodo } from '@/app/lib/actions';
import { useFormState } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

interface Todo {
    title: string;
    date: string;
    id: string;
}

const initialState = {
    message: "",
}

export default function EditTodo({ todo }: { todo: Todo }) {
  
  const { id, title, date } = todo;

  const [state, formAction] = useFormState(updateTodo, initialState) 
  const formRef = useRef<HTMLFormElement>(null);
  const [isToastShown, setIsToastShown] = useState(false);
  const router = useRouter();

  useEffect(() => {
  
    if (state.message === 'success' && !isToastShown) {
      toast.success("La tache a été créée avec succès", {
      onClose: () => {
        router.push('/todos')
      }
      })
      setIsToastShown(true); 
  
    } else if (state.message === 'error' && !isToastShown) {
        toast.error("Echec de la création de la tâche");
        setIsToastShown(true);
    }
   }, [state.message, router, isToastShown])

  return (
    <>
        <ToastContainer
            position="top-center"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
  
        <form 
            className="form"
            action={async (formData: FormData) => {
                formAction(formData);
                formRef.current?.reset(); 
            }}
            ref={formRef} 
        >
            <input type='hidden' name='id' value={id} />
            <div className="title">
                <h1>Modifier la tâche</h1>
            </div>
            <div className="align-horizontal">
                <div className="todo-container">
                    <label className="placeholder">Todo</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="Indiquez une tâche"
                        autoComplete="off"
                        defaultValue={title}
                        name="title"
                    />
                </div>
                <div className="date-container">
                    <label className="placeholder">Date</label>
                    <input
                        type="date"
                        className="input"
                        placeholder="Indiquez une date"
                        defaultValue={date}
                        name="date"

                    />
                </div>
            </div>
            <div className="button-container">
                <button type="submit" className="btn-success">Modifier</button>
                <Link className="redirect-link"href="/todos">Vers mes tâches</Link>
            </div>
        </form>
    </>

  )
}
