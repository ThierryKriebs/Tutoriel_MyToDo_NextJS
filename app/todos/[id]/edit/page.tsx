import { getTodoById } from "@/app/lib/datas";
import EditTodo from "@/app/ui/edit-form";

export default async function EditPage(
    { params} : { params : Promise<{id: string }>  }  // Depuis React 15, params est une promesse
) {
    
    const { id } = await params;

    const todo = await getTodoById(id);

    if (!todo) {
        return <p>Pas de tâche à afficher</p>
    }
    return (
        <EditTodo todo={todo} />
    )
}