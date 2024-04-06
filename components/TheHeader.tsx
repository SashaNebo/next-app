import Link from 'next/link'
import { FC } from 'react'

const TheHeader: FC = () => {
  return (
    <header>
     <Link href="/">Home</Link>
     <Link href="/blog">Blog</Link>
     <Link href="/about">About</Link>
    </header>
  )
}

export { TheHeader }