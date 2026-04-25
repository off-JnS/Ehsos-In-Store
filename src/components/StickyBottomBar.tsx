"use client"

import { useRouter } from 'next/navigation'
import { useCartStore } from '../store/cart'
import { formatPrice } from '../lib/format'

export default function StickyBottomBar() {
  const router = useRouter()
  const subtotal = useCartStore((s) => s.subtotal())
  const itemCount = useCartStore((s) => s.items.reduce((c, i) => c + i.quantity, 0))

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[94%] max-w-3xl">
      <div className="card flex items-center justify-between p-4">
        <div>
          <div className="text-sm text-zinc-400">{itemCount} Artikel</div>
          <div className="text-sm text-zinc-400">Gesamt</div>
          <div className="font-bold text-lg">{formatPrice(subtotal)}</div>
        </div>
        <div>
          <button onClick={() => router.push('/checkout')} className="btn btn-primary px-6 py-3">Zur Kasse</button>
        </div>
      </div>
    </div>
  )
}
