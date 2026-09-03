import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Params = {
    id: string;
}

// export async function GET( _request: Request, { params }: { params: Promise<{ id: string }> }
export async function GET( _request: Request, { params }: { params: Promise< Params > }
    //_request => _ signifie que la variable n'est pas utilisée mais requise par NextJS
    
    //avant old version de NextJS:
    // export async function GET(request: Request, {params}: {params: {id: string}}) {
) {
    const { id } = await params;
    // const idInteger = +id; //convertir id en number

    //SQL
    //SELECT * FROM todo WHERE id = 43432
    // const todo = await prisma.todo.findUnique({
    //     where: {
    //         id,
    //     }
    // })
    // return NextResponse.json(todo, {status: 200 });

    const todos = await prisma.todo.findMany();
    const todoWithId = todos.find((todo) => todo.id === id);

    return NextResponse.json(todoWithId, {status: 200 });
}

// MODIFIER : PATCH
export async function PATCH(request: Request, { params }: { params: Promise< Params > }) {
    const { id } = await params;
    const { title, date } = await request.json();

    console.log("Modification de la tâche avec l'id: ", id, " et le titre: ", title, " et la date: ", date);

    // UPDATE todo SET title = "acheter des bananes", date = "2026-09-03" WHERE id = 4
    const todo = await prisma.todo.update({ // Une requête Prisma n’est réellement exécutée que lorsque sa promesse est attendue!!!
        where: {
            id:id, // équivalent à id: id 
        },
        data: {
            title:title, // équivalent à title: title,
            date:date,  // équivalent à date: date,
        }
    })

    return NextResponse.json(todo, {status: 200 });
}