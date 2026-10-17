"use client"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link";
import {deleteTodo } from '@/app/lib/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function UpdateTodo({ id } : { id: string}) {
  return (
    <Link
        href={`/todos/${id}/edit`}
        className="btn btn-update"
    >
        <PencilSquareIcon style= {{ width: '20px'}} />
    </Link>
  )
}

export function DeleteTodo({ id } : { id: string }){
  // const deleteTodoWithId = deleteTodo.bind(null, id) // méthode recommandée pour envoyer des données à une action serveur
  
  const handleClick = async () => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche?");
    if (confirmDelete){
      const response = await deleteTodo(id);

      if (response.message === 'success') {
        toast.success("La tâche a été supprimée avec succès");
      } else if (response.message === 'error') {
        toast.error("Echec de la création de la tâche")
      }
    }
  }

  return (
      <>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <button
        className="btn btn-delete"
        onClick={handleClick}
      >
        <TrashIcon style= {{ width: '20px'}} />
      </button>
    </>
  )

}
