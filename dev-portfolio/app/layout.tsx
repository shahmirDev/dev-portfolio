import {Navbar, Footer} from '@/components'
import './globals.css'
import '../components'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      {children}
      <Footer />
    </html>
  )
}
