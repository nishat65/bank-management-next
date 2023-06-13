import NavBar from '../NavBar'
import SideBar from '../SideBar/index'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="h-full flex">
            <SideBar />
            <main className="h-full w-full p-4 flex flex-col">
                <NavBar />
                <div className="h-full w-full mt-10">{children}</div>
            </main>
        </section>
    )
}
