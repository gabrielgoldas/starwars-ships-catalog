import Link from "next/link"
import spaceships from "../../../spaceships.json"

const uniqueCategories = [...new Set(spaceships.map(spaceship => spaceship.category))]

export default function Page() {
  return (
    <div>
      <h1>Categorias</h1>
      <div className="grid-container">
        {uniqueCategories.map((uCategory, index) => (
          <Link key={index} href={`/categories/${uCategory}`} className="btn-grid">{uCategory}</Link>
        ))}
      </div>
    </div>
  )
}