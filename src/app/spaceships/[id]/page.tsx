import { notFound } from "next/navigation";
import spaceships from "../../../../spaceships.json";
import { use } from "react";
import Image from "next/image";
import styles from "./page.module.css"
import Link from "next/link";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const spaceship = spaceships.find((ship) => ship.id == id);

  
  if (!spaceship) {
    return notFound() // Retorna 404 se não encontrar a espaçonave
  }
  
  const currentIndex = spaceships.findIndex((ship) => ship.id === id);
  const nextIndex = (currentIndex + 1) % spaceships.length;
  const nextShip = spaceships[nextIndex];

  return (
    <div>
      <h1>{spaceship.name}</h1>
      <Image 
        className={styles.shipImg} 
        src={`${spaceship.imageUrl}`} 
        alt={spaceship.name}  
        width={768} 
        height={432} 
      />
      <div className={styles.shipContainer}>
        <p>Classe: {spaceship.category}</p>
        <p>Modelo: {spaceship.model}</p>
        <p>{spaceship.description}</p>
        <div className={styles.btns}>
          <Link href="/spaceships" className="btn-outline">Voltar para Espaçonaves</Link>
          <Link href={`/spaceships/${nextShip.id}`} className="btn-outline">Próxima</Link>
        </div>
      </div>
    </div>
  )
}