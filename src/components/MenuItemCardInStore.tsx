"use client"

import { useState } from 'react'
import { Plus, Minus, ChevronDown } from 'lucide-react'
import { useCartStore } from '../store/cart'
import { formatPrice } from '../lib/format'
import CustomizeModal from './CustomizeModal'

export default function MenuItemCardInStore({ item }: { item: any }) {
  const [open, setOpen] = useState(false)
  const [customizing, setCustomizing] = useState(false)
  const { items, addItem, updateQuantity } = useCartStore()
  const cartItem = items.find((i) => i.menu_item.id === item.id && (!i.customizations || i.customizations.length === 0))
  const quantity = cartItem?.quantity ?? 0

  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-center justify-between" onClick={() => setOpen(!open)}>
        <div>
          <h3 className="font-semibold text-white">{item.name}</h3>
          {item.description && <p className="text-zinc-400 text-sm">{item.description}</p>}
        </div>
        <div className="text-right">
          <div className="text-brand-primary font-bold">{formatPrice(item.price)}</div>
          <ChevronDown className={`text-zinc-500 ${open ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {open && (
        <div className="pt-2 border-t border-zinc-800">
          <p className="text-sm text-zinc-400 mb-2">Allergene: {item.allergens?.join(', ') || 'keine'}</p>
          <div className="flex items-center gap-3">
            {quantity === 0 ? (
              <button onClick={() => addItem(item)} className="btn btn-primary">
                <Plus /> Hinzufügen
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, quantity - 1)} className="w-10 h-10 rounded-lg bg-brand-surface flex items-center justify-center">
                  <Minus />
                </button>
                <div className="w-6 text-center">{quantity}</div>
                <button onClick={() => addItem(item)} className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white">
                  <Plus />
                </button>
              </div>
            )}

            <button onClick={() => setCustomizing(true)} className="btn btn-secondary">Anpassen</button>
          </div>
        </div>
      )}

      {customizing && <CustomizeModal item={item} onClose={() => setCustomizing(false)} />}
    </div>
  )
}
