import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: "EHSO'S BURGER — In-Store",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  )
}
