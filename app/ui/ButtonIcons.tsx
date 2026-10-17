import { PencilSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link";

export default function UpdateTodo({ id } : { id: string}) {
  return (
    <Link
        href={`/todos/${id}/edit`}
        className="btn btn-update"
    >
        <PencilSquareIcon style= {{ width: '20px'}} />
    </Link>
  )
}
