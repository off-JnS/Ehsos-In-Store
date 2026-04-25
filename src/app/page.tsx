import MenuApp from '../components/MenuApp'
import StickyBottomBar from '../components/StickyBottomBar'

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="logo text-3xl">EHSO'S <span className="logo-accent">BURGER</span></h1>
        </div>
      </header>

      <MenuApp />

      <StickyBottomBar />
    </main>
  )
}
