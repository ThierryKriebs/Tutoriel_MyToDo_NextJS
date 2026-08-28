"use client"

import { useSearchParams } from "next/navigation"

//Méthode de récupération numéro 1
// const EditPage = async ({ searchParams } : { searchParams:Promise<{ id?: string }> }) => {
//                                             //  Promise<{ id?: string } est équivalent à Promise<{id: string | undefined }  
        
//     const { id: todoId } = await searchParams; //en NextJS 16, searchParams est devenue une promesse...
//                                                //const { id: todoId }  est une destructuration avec renommage! 
//                                                //Prends la propriété id de l’objet et place sa valeur dans une nouvelle constante appelée todoId
    
//     return (
//         <div>{ todoId } salut!!!</div>
//     )
// }

// Méthode de récupération numéro 2
const EditPage = () => {
    
    const searchParams = useSearchParams();
    const todoId = searchParams.get("id");
    
    return (
        <div>{ todoId } salut!!!</div>
    )
}


export default EditPage