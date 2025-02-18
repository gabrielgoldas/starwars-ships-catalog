import Link from "next/link"
import spaceships from "../../../../spaceships.json"
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { category: string } }) {
  //console.log("Parâmetros recebidos:", params);

  const { category } = params;

  //console.log("Category param:", category);
  //console.log("Spaceships data:", spaceships);

  const shipsFilter = spaceships.filter((s) => s.category === category)
  
  if (shipsFilter.length === 0) {
    return notFound()
  }
  
  return (
    <div>
      <h1>{category}</h1>
      <div className="grid-container">
        { shipsFilter.map(ship => (
          <Link key={ship.id} href={`/spaceships/${ship.id}`} className="btn-grid">{ship.name}</Link>    
        )) }
      </div>
    </div>
  )
}