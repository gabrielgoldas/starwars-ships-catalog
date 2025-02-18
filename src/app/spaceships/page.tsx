import Link from "next/link"
import spaceships from "@/data/spaceships.json"

export default function Page() {
  return (
    <div>
      <h1>Todas as Espaçonaves</h1>
      <div className="grid-container">
        {spaceships.map((spaceship) => (
          <Link 
            key={spaceship.id} 
            href={`/spaceships/${spaceship.id}`} 
            legacyBehavior
          >
            <a className="btn-grid">{spaceship.name}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}