"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '../../store/cart'
import { formatPrice } from '../../lib/format'

export default function CheckoutPage() {
  const router = useRouter()
  const items = useCartStore((s) => s.items)
  const subtotal = useCartStore((s) => s.subtotal())
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'cash' | null>(null)

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-4">
        <button onClick={() => router.back()} className="btn btn-ghost">Zurück</button>
      </div>

      <h1 className="text-2xl font-bold mb-4">Bezahlung & Zusammenfassung</h1>

      <div className="space-y-3">
        {items.map((it, idx) => (
          <div key={idx} className="card flex items-center justify-between">
            <div>
              <div className="font-semibold">{it.menu_item.name} x{it.quantity}</div>
              {it.customizations?.length ? <div className="text-sm text-zinc-400">{it.customizations.join(', ')}</div> : null}
            </div>
            <div className="font-bold">{formatPrice(it.menu_item.price * it.quantity)}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 card p-4">
        <div className="flex items-center justify-between mb-2"><div className="text-zinc-400">Zwischensumme</div><div className="font-bold">{formatPrice(subtotal)}</div></div>
        <div className="flex items-center justify-between mb-2"><div className="text-zinc-400">Lieferkosten</div><div className="font-bold">{formatPrice(0)}</div></div>
        <div className="flex items-center justify-between"><div className="text-zinc-400">Gesamt</div><div className="font-bold">{formatPrice(subtotal)}</div></div>
      </div>

      <div className="mt-6 card p-4">
        <h2 className="font-semibold mb-2">Zahlungsmethode (Platzhalter)</h2>
        <div className="flex gap-3">
          <label className={`px-3 py-2 rounded-lg border ${paymentMethod === 'card' ? 'bg-brand-primary text-white' : 'text-zinc-400'}`}>
            <input type="radio" name="pm" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="hidden" /> Karte
          </label>
          <label className={`px-3 py-2 rounded-lg border ${paymentMethod === 'paypal' ? 'bg-brand-primary text-white' : 'text-zinc-400'}`}>
            <input type="radio" name="pm" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="hidden" /> PayPal
          </label>
          <label className={`px-3 py-2 rounded-lg border ${paymentMethod === 'cash' ? 'bg-brand-primary text-white' : 'text-zinc-400'}`}>
            <input type="radio" name="pm" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} className="hidden" /> Bar
          </label>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="btn btn-primary">Bestellung absenden (Test)</button>
      </div>
    </main>
  )
}
