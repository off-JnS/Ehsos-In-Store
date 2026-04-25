"use client"

import MenuItemCardInStore from './MenuItemCardInStore'

export default function MenuGrid({ categories }: { categories: any[] }) {
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <section key={category.id}>
          <h2 className="text-xl font-bold mb-3">{category.name}</h2>
          <div className="grid grid-cols-1 gap-4">
            {category.items.map((item: any) => (
              <MenuItemCardInStore key={item.id} item={item} categorySlug={category.slug} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
