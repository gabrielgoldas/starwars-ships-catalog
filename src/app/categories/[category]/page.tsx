"use client"

import Link from "next/link"
import spaceships from "@/data/spaceships.json"
import { notFound, useParams } from "next/navigation";

export default function Page() {

  const { category } = useParams();

  if (typeof category !== 'string') {
    return notFound()
  }

  const categorySpaceships = spaceships.filter((s) => s.category === category.replace('_', " "))
  
  if (categorySpaceships.length === 0) {
    return notFound()
  }
  
  return (
    <div>
      <h1>{category.replace('_', " ")}</h1>
      <div className="grid-container">
        { categorySpaceships.map(ship => (
          <Link 
            key={ship.id} 
            href={`/spaceships/${ship.id}`} 
            className="btn-grid"
          >
            {ship.name}
          </Link>    
        )) }
      </div>
    </div>
  )
}