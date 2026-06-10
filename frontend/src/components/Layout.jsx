import { NavLink } from "react-router-dom";

const links = [
  { to: "/assets", label: "Dashboard" },
  { to: "/assets/assets", label: "Assets" },
  { to: "/assets/employees", label: "Employees" },
  { to: "/assets/assignments", label: "Assignments" }
];

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">AM</span>
          <div>
            <strong>Asset Management</strong>
          </div>
        </div>

        <nav className="nav-links">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}