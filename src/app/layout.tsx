import './globals.css'
import PreLoader from "./components/Preloader/Preloader"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <PreLoader />
        <h1>Hello</h1>
        {children}
        </body>
    </html>
  )
}
