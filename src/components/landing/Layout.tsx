import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="h-screen overflow-hidden relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/e1e43d36-9d3e-4b3c-a955-671b04daba73/bucket/00578930-5bf0-49fd-af58-b5e898306ffc.jpeg')" }}
    >
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="rgba(255,255,255,0.25)"
          hoverFillColor="rgba(255,255,255,0.15)"
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}