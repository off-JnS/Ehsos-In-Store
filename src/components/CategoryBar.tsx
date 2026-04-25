"use client"

import type { FC } from 'react'

const CategoryBar: FC<{
  categories: any[]
  selected?: string | null
  onSelect?: (id: string | null) => void
}> = ({ categories, selected = null, onSelect }) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      <button
        onClick={() => onSelect?.(null)}
        className={`px-4 py-2 rounded-full text-sm font-bold ${selected === null ? 'bg-brand-primary text-white' : 'text-zinc-400 hover:text-white bg-transparent'}`}>
        Alle
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect?.(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-bold ${selected === cat.id ? 'bg-brand-primary text-white' : 'text-zinc-400 hover:text-white bg-transparent'}`}>
          {cat.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar
