"use client"

import { notFound, useParams } from "next/navigation";
import spaceships from "@/data/spaceships.json";
import Image from "next/image";
import styles from "./page.module.css"
import Link from "next/link";

export default function Page() {

  const { id } = useParams();
  
  if (!id || typeof id !== 'string') {
    return notFound() // Retorna 404 se não encontrar a espaçonave
  }

  const spaceship = spaceships.find((ship) => ship.id == +id);

  if (!spaceship) {
    return notFound()
  }

  return (
    <div>
      <h1>{spaceship.name}</h1>
      <Image 
        className={styles.shipImg} 
        src={`${spaceship.imageUrl}`} 
        alt={spaceship.name}  
        width={768} // 16:9
        height={432} 
      />
      <div className={styles.shipContainer}>
        <p><strong>Classe: </strong>{spaceship.category}</p>
        <p><strong>Modelo: </strong>{spaceship.model}</p>
        <p>{spaceship.description}</p>

        <div className={styles.btns}>
        <Link href={`/spaceships`} className="btn-outline">Voltar para Espaçonaves</Link>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link 
              href={`/spaceships/${+id - 1}`} 
              className="btn-outline"
              style={{ display: +id === 1 ? 'none' : 'block' }}
            >
              Anterior
            </Link>
            <Link 
              href={`/spaceships/${+id + 1}`} 
              className="btn-outline"
              style={{ display: +id === spaceships.length ? 'none' : 'block' }}
            >
              Próxima
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}