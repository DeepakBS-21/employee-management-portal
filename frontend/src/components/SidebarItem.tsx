import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

// Props required by each sidebar item.
interface SidebarItemProps {
  // Icon displayed in the sidebar.
  icon: LucideIcon;

  // Text displayed beside the icon.
  label: string;

  // URL/path of the menu item.
  href: string;
}

function SidebarItem({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => `
        flex items-center gap-3 rounded-lg px-3 py-2.5
        text-sm font-medium transition-colors

        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }
      `}
    >
      {/* Display the icon */}
      <Icon size={20} />

      {/* Display the menu label */}
      <span>{label}</span>
    </NavLink>
  );
}

export default SidebarItem;