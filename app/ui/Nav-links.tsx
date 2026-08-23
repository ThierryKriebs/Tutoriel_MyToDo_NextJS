'use client' 
// transformation en client componant car on utilise un hook
import { usePathname } from "next/navigation"
import Link from "next/link";


export default function NavLinks() {
    const pathname = usePathname(); //renvoie l'url courante

    // Si on est sur /create-todo  =>   affiche un lien pour /todos
    // Sinon                       =>   affiche un lien pour /create-todo
    const navLink = pathname.startsWith('/create-todo') ?
    <Link className="link" href='/todos'>Mes tâches</Link> 
    : <Link className="link" href='/create-todo'>Créer une tâche</Link> 

  return navLink;

}
