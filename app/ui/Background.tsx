import Image from "next/image";


export default function Background() {
  return (
    <Image
        alt="Arrière-plan avec neige"
        src="/christmas-background.jpg"
        quality={100}
        fill  //={true} par défaut =>remplit l'élément parent
        sizes="100vw" //occupe toute la largeur de la fenêtre du navigateur
        style= {{
            objectFit:'cover', //redimentionnement en remplissant le parent (donc de la balise main dans notre cas) tout en respectant le ratio tout 
            // paddingTop: '50px',
            zIndex: '-5'
        }}
    />
  )
}
