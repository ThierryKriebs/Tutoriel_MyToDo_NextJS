'use client'

import { useState } from "react"


const CreateTodo = () => {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const handleCreateTodo = () => {

  }

  return (
    <>
      <form className="form" onSubmit={handleCreateTodo}>
        <div className = "title">
          <h1>Créer une tâche</h1>
        </div>
        <div className="align-horizontal">
          <div className="todo-container">
            <label className="placeholder">Tâche</label>
            <input
              className="input"
              type="text"
              value={title}
              placeholder="Indiquez une tâche"
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="date-container">
            <label className="placeholder">Date</label>
            <input
              className="input"
              type="date"
              value={date}
              placeholder="Indiquez une date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="button-container">
          {
            !isDisabled && <button type="submit" className="btn-success">Créer</button>
          }
        </div>
      </form>
    </>
  )
}

export default CreateTodo