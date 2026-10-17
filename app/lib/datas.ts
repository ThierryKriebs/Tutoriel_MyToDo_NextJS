import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/app/db";

export async function getTodos() {
    noStore();  // Opte pour le rendu dynamique : aucune mise en cache par Next.js,
                // les pages qui appellent getTodos() seront re-rendues à chaque requête

    try {
        const todos = await prisma.todo.findMany( {orderBy: { date: 'asc' }});
        return todos;

    } catch (error) {
        throw new Error("Echec de récupération des todos");
    }
}