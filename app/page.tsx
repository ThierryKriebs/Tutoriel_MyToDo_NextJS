import Image from "next/image";
import snowman from "@/public/snowman.png";
import styles from "./page.module.css";

console.log(snowman); // Affiche un objet (src optimisée, taille, options ...)

export default function Home() {
  return (
    <div className="splash-container">
      <div className="left-box">
        <section>
          <h1>Bienvenue sur l'application</h1>
          <p>Une CRUD appication codée dans le cadre de la formation Next.js de DonkeyGeek</p>
          <h2>Objectifs:</h2>
          <ul>
            <li>Coder une application fonctionnelle tout en révisant les concepts de Next.js (App Router)</li>
            <li>Découvrir les bases de données NOSQL (MongoDB) avant d'aborder le SQL avec PostgreSQL</li>
            <li>Mettre en pratique nos connaissances des "Routes Handlers" avec les méthodes GET, PATCH et DELETE (valeurs dynamiques)</li>
          </ul>

        </section>

      </div>

      <div className="right-box">
        {/* Image de snowman avec width: 400 et un height de 400 */}
        <Image 
          // src={snowman} 
          src={"https://cdn.pixabay.com/photo/2012/04/13/00/32/snowman-31303_1280.png"} 
          // src={"https://cdn.pixabay.com/photo/2022/11/10/20/29/snowman-7583640_1280.jpg"} 

          alt="Bonhomme de neige" 
          // placeholder="blur" 
          width={'400'} height={'400'}  
          // Autre solution:
          // style={{
          //   width: '400px',
          //   height: '400px'
          // }}
        /> 
        {/* le placeholder permet d'afficher un flou le temps que l'image soit chargée (évite les décallages lors des rendus!) */}
      </div>
    </div>
  );
}
