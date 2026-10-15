'use server'

import prisma from "../db";
import { z } from 'zod';

// Server action used with useActionState: prevState holds the message returned by the previous call
 export async function createTodo(
    prevState: {
        message: string;
    },
    formData:FormData
){
    // Expected structure of the form data
    const schema = z.object({
        title: z.string(),
        date: z.string(),
    });

    // Validate the raw form values; safeParse returns a result object instead of throwing
    const parse = schema.safeParse({
        title: formData.get("title"),
        date: formData.get("date"),
    })

    // Abort early if validation fails
    if (!parse.success) {
        return { message: "error"}
    }

    // Retrieve the sanitised and typed values
    const data = parse.data;

    // Persist the validated todo in the database
    try {

        await prisma.todo.create({
            data: {
                title: data.title,
                date: data.date
            }
        })

        
        return { message: 'success'}
        
    // Never let a database error crash the action; return an error message instead
    } catch (error) {
        return { message: "error"}
    }

    
  }


