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
