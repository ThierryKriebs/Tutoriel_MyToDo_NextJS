"use client"
import { useState } from 'react';
import { useFormState } from "react-dom";
import { createTodo } from '@/app/lib/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";


const initialState = {
  message: "",
}

const CreateTodo = () => {
 
 const [state, formAction] = useFormState(createTodo, initialState);
 const router = useRouter();
 const [isToastShown, setIsToastShown] = useState(false);

 if (state.message === 'success' && !isToastShown) {
    toast.success("La tâce a été créée avec succès", {
      onClose: () => {
        router.push('/todos')
      }
    })
    setIsToastShown(true);
 } else if (state.message === 'error' && !isToastShown) {
    toast.error("Echec de la création de la tâche");
    setIsToastShown(true);
 }

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
      <form className="form" action={formAction}>
        <div className = "title">
          <h1>Créer une tâche</h1>
        </div>
        <div className="align-horizontal">
          <div className="todo-container">
            <label className="placeholder">Tâche</label>
            <input
              className="input"
              type="text"
              placeholder="Indiquez une tâche"
              autoComplete="off"
              name="title"
              required
            />
          </div>

          <div className="date-container">
            <label className="placeholder">Date</label>
            <input
              className="input"
              type="date"
              placeholder="Indiquez une date"
              name="date"
              required
            />
          </div>
        </div>

        <div className="button-container">
            <button 
              type="submit" 
              className="btn-success"
            >Créer</button>
        </div>
      </form>
    </>
  )
}

export default CreateTodo