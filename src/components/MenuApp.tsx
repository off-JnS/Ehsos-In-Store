"use client"

import { useState } from 'react'
import CategoryBar from './CategoryBar'
import MenuGrid from './MenuGrid'
import { MENU } from '../lib/menu-data'

export default function MenuApp() {
  const [selected, setSelected] = useState<string | null>(MENU[0]?.id ?? null)
  const categories = MENU
  const shown = selected ? categories.filter((c) => c.id === selected) : categories

  return (
    <div>
      <CategoryBar categories={categories} selected={selected} onSelect={setSelected} />
      <MenuGrid categories={shown} />
    </div>
  )
}
