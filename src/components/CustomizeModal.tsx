"use client"

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useCartStore } from '../store/cart'

export default function CustomizeModal({ item, onClose }: { item: any; onClose: () => void }) {
  const [notes, setNotes] = useState('')
  const [quantity, setQuantity] = useState(1)
  const addItemWithCustomizations = useCartStore((s) => s.addItemWithCustomizations)

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md bg-brand-surface rounded-xl p-4 z-10">
        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
        {item.description && <p className="text-sm text-zinc-400 mb-3">{item.description}</p>}

        <label className="text-sm mb-1 block">Anpassungen / Entfernen</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="input h-24 mb-3" placeholder="Z.B. ohne Zwiebeln, ohne Käse" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="w-10 h-10 rounded-lg bg-brand-surface flex items-center justify-center"><Minus /></button>
            <div className="w-8 text-center">{quantity}</div>
            <button onClick={() => setQuantity((q) => q + 1)} className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center"><Plus /></button>
          </div>

          <div className="flex gap-2">
            <button onClick={() => { addItemWithCustomizations(item, notes ? [notes] : [], quantity); onClose(); }} className="btn btn-primary">In den Warenkorb</button>
            <button onClick={onClose} className="btn btn-secondary">Abbrechen</button>
          </div>
        </div>
      </div>
    </div>
  )
}
