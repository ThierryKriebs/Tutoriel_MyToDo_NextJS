"use client"
import { useEffect, useState,useRef } from 'react';
import { useFormState } from "react-dom"; // déprécié en React 19.2
//import { useActionState } from "react" // En rReact 19.2
import { createTodo } from '@/app/lib/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import Button from '@/app/ui/Button';


const initialState = {
  message: "",
}

const CreateTodo = () => {
 
 const [state, formAction] = useFormState(createTodo, initialState); //Depuis React 19.2: ReactDOM.useFormState has been renamed to React.useActionState. Please update CreateTodo to use React.useActionState. 
                                                                      //React 19.2: const [state, formAction, isPending] = useActionState(action, initialState)
 const router = useRouter();
 const [isToastShown, setIsToastShown] = useState(false);
 const formRef = useRef<HTMLFormElement>(null); //formRef est juste une boîte ({ current: null }). useRef garantit que cette boîte est toujours la même d'un rendu à l'autre.
                                                // useRef retourne toujours un objet avec une seule propriété nommée current

 const [isBtnDisabled, setIsBtnDisabled] = useState(false);

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
          formRef.current?.reset(); // Vide les inputs du formulaire sans déclencher de rerendu, car les inputs sont non contrôlés
        }}
        ref={formRef} // Demande à React de mémoriser l'élément DOM <form> dans
                      // formRef.current (rempli au montage, conservé entre les rendus,
                      // modifiable sans provoquer de re-rendu)
                      //ref => attribut JSX comme className ou action
      >
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
           <Button />
        </div>
      </form>
    </>
  )
}

export default CreateTodo