// import { NavLink } from "react-router-dom";

// const links = [
//   { to: ".", label: "Dashboard" },
//   { to: "assets", label: "Assets" },
//   { to: "employees", label: "Employees" },
//   { to: "assignments", label: "Assignments" }
// ];

// export default function Layout({ children }) {
//   return (
//     <div className="app-shell">
//       <aside className="sidebar">
//         <div className="brand">
//           <span className="brand-mark">AM</span>
//           <div>
//             <strong>Asset Management</strong>
//           </div>
//         </div>

//         <nav className="nav-links">
//           {links.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               relative="path"
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       <main className="content">{children}</main>
//     </div>
//   );
// }
import { NavLink } from "react-router-dom";

const links = [
  { to: "", label: "Assets", end: true },
  { to: "dashboard", label: "Dashboard" },
  { to: "employees", label: "Employees" },
  { to: "assignments", label: "Assignments" }
];

function joinPath(basePath, childPath) {
  const normalizedBase = basePath && basePath !== "/" ? basePath.replace(/\/+$/, "") : "";
  const normalizedChild = childPath.replace(/^\/+/, "");

  if (!normalizedChild) return normalizedBase || "/";
  return `${normalizedBase}/${normalizedChild}`;
}

export default function Layout({ basePath = "", children }) {
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
            <NavLink
              key={link.to}
              to={joinPath(basePath, link.to)}
              end={link.end}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}