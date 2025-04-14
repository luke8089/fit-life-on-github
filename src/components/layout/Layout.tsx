
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container py-6 md:py-10 pb-20 md:pb-10">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
}
