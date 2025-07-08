import { NavLink } from "react-router-dom";
import { Home, User, FolderOpen, BookOpen, FileText, Briefcase, Mail } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Research", href: "/research", icon: FileText },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar-background border-r border-sidebar-border lg:static lg:inset-0">
      <div className="flex h-full flex-col">
        {/* Logo/Brand */}
        <div className="flex h-16 shrink-0 items-center px-6">
          <h1 className="text-xl font-academic font-bold text-sidebar-primary">
            Portfolio
          </h1>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-6 py-4">
          <ul role="list" className="flex flex-1 flex-col gap-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-medium transition-colors ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent"
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}