import Link from "next/link"
import spaceships from "@/data/spaceships.json"

const uniqueCategories = new Set(spaceships.map(ship => ship.category))
const categoriesArray = Array.from(uniqueCategories)

export default function Page() {
  return (
    <div>
      <h1>Categorias</h1>
      <div className="grid-container">
        {categoriesArray.map((uCategory, index) => (
          <Link 
            key={index} 
            href={`/categories/${uCategory.replace(' ', "_")}`} 
            className="btn-grid"
          >
            {uCategory}
          </Link>
        ))}
      </div>
    </div>
  )
}

// Como temos categorias com dois nomes (Capital Ship) usamos o replace para substituir os espaços " " por "_".