"use client"

import Link from "next/link"
import spaceships from "@/data/spaceships.json"
import { notFound, useParams } from "next/navigation";

export default function Page() {

  const params = useParams();

  const shipsFilter = spaceships.filter((s) => s.category === params.category)
  
  if (shipsFilter.length === 0) {
    return notFound()
  }
  
  return (
    <div>
      <h1>{params.category}</h1>
      <div className="grid-container">
        { shipsFilter.map(ship => (
          <Link key={ship.id} href={`/spaceships/${ship.id}`} className="btn-grid">{ship.name}</Link>    
        )) }
      </div>
    </div>
  )
}