import './style.css'
import Sidebar from '@/components/Sidebar'
import { locales } from 'config.js'

export async function generateStaticParams() {
  return locales.map((locale) => ({ lng: locale }))
}

export default async function RootLayout({
  children,
  params: {
    lng
  }
}) {

  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <div className="main">
            <Sidebar lng={lng} />
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  )
}
