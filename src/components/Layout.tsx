import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CustomCursor from './custom-cursor'

export default function Layout() {
  return (
    <main className="min-h-screen flex flex-col max-w-screen-2xl mx-auto">
      <CustomCursor />
      <Header />
      <section className="flex-grow px-6 md:px-16 py-12">
        <Outlet />
      </section>
      <Footer />
      <div id="modal"></div>
    </main>
  )
}