"use client"
import { todo } from "node:test";
import { useState, useEffect } from "react";
import { formatDate } from '@/app/utils/formatDate';

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
        <ul className="ul-list mb w-60 shadow-hover" role = "list">
        {
          todos.map((todo: Todo) => (
            <li key={todo.id} className="li-list">
              <div className="todo">
                <p className="date">{formatDate(todo.date)}</p>
                <h2> {todo.title}</h2>

                <div>
                  <button 
                    className="btn btn-update"
                    onClick={() => {}}
                  >
                    Modifier
                  </button>
                  <button 
                    className="btn btn-delete"
                    onClick={() => {}}
                  >
                    Effacer
                  </button>
                </div>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    </section>
  )
}

export default TodoList