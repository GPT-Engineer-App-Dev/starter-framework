import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="border-t bg-background p-4 text-center">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;