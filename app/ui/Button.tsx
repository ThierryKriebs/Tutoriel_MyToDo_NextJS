import React from 'react'
import prisma from '../db';

export default function Button() {

  async function createTodo(formData:FormData) {
    "use server"

    const title = formData.get("title") as string;
    const date = formData.get("date") as string;
    
    await prisma.todo.create({
      data: {
        title: title,
        date: date
      }
    })
  }

  return (
    <button 
        type="submit" 
        className="btn-success"
        formAction={createTodo}
    >Créer 2</button>
  )
}
