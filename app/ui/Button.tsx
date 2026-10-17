import React from 'react'
import prisma from '../db';

export default function Button({ isDisabled } : { isDisabled: boolean }) {

  
  return (
    <button 
        type="submit" 
        className="btn-success"
        disabled = { isDisabled }
    >Créer</button>
  )
}
