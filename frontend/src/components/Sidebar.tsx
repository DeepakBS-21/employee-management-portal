import {
    LayoutDashboard,
    Users,
    Building2,
    CalendarCheck,
    CalendarDays,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

function Sidebar()
{
    const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      label: "Employees",
      icon: Users,
      href: "/employees",
    },
    {
      label: "Departments",
      icon: Building2,
      href: "/departments",
    },
    {
      label: "Attendance",
      icon: CalendarCheck,
      href: "/attendance",
    },
    {
      label: "Leave",
      icon: CalendarDays,
      href: "/leave",
    },
  ];

    return(
        <aside className="h-screen w-64 shrink-0 bg-slate-900 text-white">
            <div className="border-b border-slate-800 px-6 py-5"> 
                <h1 className="text-lg font-bold">Employee portal</h1>

            <p className="mt-1 text-slate-400">
                Management System
            </p>
            </div>

            <nav className="space-y-1 p-3">
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                    />
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar;