import Image from "next/image"

import { NavigationMenuDemo } from "@/components/navigation-menu"
import { SiteHeader } from "@/components/site-header"
import { Text } from "@/components/text"

export default function Home() {
  return (
    <main className="mt-10 flex flex-col items-center justify-center gap-10">
      <Text />
      <Text />
      <Image
        src={
          "https://images.unsplash.com/photo-1697723678949-5184d37f11ff?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
        width={900}
        height={900}
      />
      <Text />
    </main>
  )
}
