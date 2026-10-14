import prisma from "../db"
import Button from "../ui/Button"

const CreateTodo = () => {
 
  // async function createTodo(formData:FormData){
  //   "use server"

  //   const title = formData.get("title") as string;
  //   const date = formData.get("date") as string;

  //   await prisma.todo.create({
  //     data: {
  //       title: title,
  //       date: date
  //     }
  //   })
  // }

  return (
    <>
      {/* <form className="form" action={createTodo}> */}
      <form className="form" >
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
            <Button />
        </div>
      </form>
    </>
  )
}

export default CreateTodo