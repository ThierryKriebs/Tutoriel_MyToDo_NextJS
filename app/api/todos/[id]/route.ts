import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET( _request: Request, { params }: { params: Promise<{ id: string }> }
    //avant old version de NextJS:
    // export async function GET(request: Request, {params}: {params: {id: string}}) {
) {
    const { id } = await params;

    //SQL
    //SELECT * FROM todo WHERE id = 43432
    const todo = await prisma.todo.findUnique({
        where: {
            id,
        }
    })

    return NextResponse.json(todo, {status: 200 });
}
