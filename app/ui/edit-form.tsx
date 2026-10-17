import Link from "next/link";

interface Todo {
    title: string;
    date: string;
}

export default function EditTodo({ todo }: { todo: Todo }) {
  
  const { title, date } = todo;

  return (
     <form className="form">
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

  )
}
