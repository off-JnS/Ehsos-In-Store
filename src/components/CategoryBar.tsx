"use client"

import type { FC } from 'react'

const ICONS: Record<string, string> = {
  burger: '🍔',
  sauces: '🌶️',
  croque: '🥪',
  wraps: '🌯',
  'finger-food': '🍟',
  crepes: '🥞',
  'family-box': '📦',
  drinks: '🥤'
}

const CategoryBar: FC<{
  categories: any[]
  selected?: string | null
  onSelect?: (id: string | null) => void
}> = ({ categories, selected = null, onSelect }) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect?.(cat.id)}
          aria-pressed={selected === cat.id}
          className={`px-5 py-3 rounded-full text-base font-bold flex items-center gap-2 ${selected === cat.id ? 'bg-brand-primary text-white' : 'text-zinc-400 hover:text-white bg-transparent'}`}>
          <span className="text-xl leading-none">{ICONS[cat.id] ?? '🍽️'}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  )
}

export default CategoryBar
