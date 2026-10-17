"use client";


import { useFormStatus } from "react-dom"

export default function Button() {

  const { pending } = useFormStatus();
  
  return (
    <button 
        type="submit" 
        className="btn-success"
        aria-disabled={pending} // pendant le pending aria-disabled vaut true
                                // les personnes qui utiisent les technologies d'assistance, vont savoir que le bouton est désactivé
    >Créer</button>
  )
}
