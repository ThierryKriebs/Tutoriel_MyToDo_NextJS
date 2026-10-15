import { useFormState } from "react-dom";
import { createTodo } from '@/app/lib/actions';

const initialState = {
  message: "",
}

const CreateTodo = () => {
 
 useFormState(createTodo, initialState)

  return (
    <>
      <form className="form" action={createTodo}>
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