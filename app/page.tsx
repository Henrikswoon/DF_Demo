import Explorer from "@/components/profile"

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <nav className="h-10vh bg-gray-200 text-black">
        Navbar
      </nav>
      <section className="grid grid-cols-2 py-8"> {/*Content*/}
        <section className="grid grid-cols-6 gap-y-5 overflow-scroll h-screen"> {/*Profile wrapper*/}
          <Explorer/>
        </section> 
        <section className="flex items-center justify-center"> {/*Sidebar*/}
          Sidebar
        </section>
      </section>
    </main>
  )
}