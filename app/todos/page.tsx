"use client"
import { useState, useEffect } from "react"

interface Todo {
  id: string;
  title: string;
  date: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //ce state est un array de Todo
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    const getTodos = async () => {
      const response = await fetch("api/todos");
      const data = await response.json();
      console.log(data);
      setTodos(data);
      setIsLoading(false);
    }

    getTodos();
  }, [])

  return (
    <section>
      <h1 className="text-center">Tâches créés</h1>
      {
        todos.length === 0 && (
          <p className="loader">
            {isLoading ? "Veuillez patienter ..." : "Aucune Todos à afficher"}
          </p>
        )
      }

      <div className="listContainer">
        {/* LIST */}
      </div>

    </section>
  )
}

export default TodoList