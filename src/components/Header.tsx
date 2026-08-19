import { Bell, UserCircle } from "lucide-react";

function Header() {
  return (
    // Header occupies the top of the main content area.
    <header className="flex h-18 items-center justify-between border-b border-slate-200 bg-white px-6">

      {/* Page title */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Employee Management
        </h2>

        <p className="text-xs text-slate-500">
          Manage your organization
        </p>
      </div>

      {/* Right side of header */}
      <div className="flex items-center gap-5">

        {/* Notification button */}
        <button
          type="button"
          className="
            relative rounded-lg p-2
            text-slate-500
            transition-colors
            hover:bg-slate-100
            hover:text-slate-900">
          <Bell size={20} />

          {/* Notification indicator */}
          <span
            className="
              absolute right-1 top-1
              h-2 w-2 rounded-full
            "
          />
        </button>

        {/* Current user */}
        <div className="flex items-center gap-3">

          <UserCircle
            size={34}
            className="text-slate-400"
          />

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Admin User
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;