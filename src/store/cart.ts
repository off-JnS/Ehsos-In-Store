import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MenuItem { id: string; name: string; price: number }

interface CartItem {
  menu_item: MenuItem
  quantity: number
  customizations?: string[]
}

interface CartStore {
  items: CartItem[]
  addItem: (item: MenuItem) => void
  addItemWithCustomizations: (item: MenuItem, customizations?: string[], quantity?: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, qty: number) => void
  subtotal: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.menu_item.id === item.id && (!i.customizations || i.customizations.length === 0))
          if (existing) {
            return { items: state.items.map((i) => (i === existing ? { ...i, quantity: i.quantity + 1 } : i)) }
          }
          return { items: [...state.items, { menu_item: item, quantity: 1 }] }
        }),

      addItemWithCustomizations: (item, customizations = [], quantity = 1) =>
        set((state) => ({ items: [...state.items, { menu_item: item, quantity, customizations }] })),
      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.menu_item.id !== id) })),
      updateQuantity: (id, qty) => {
        if (qty <= 0) return set((state) => ({ items: state.items.filter((i) => i.menu_item.id !== id) }))
        set((state) => ({ items: state.items.map((i) => (i.menu_item.id === id ? { ...i, quantity: qty } : i)) }))
      },
      subtotal: () => get().items.reduce((s, i) => s + i.menu_item.price * i.quantity, 0),
    }),
    { name: 'in-store-cart' }
  )
)
