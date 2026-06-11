// import { Navigate, Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Assets from "./pages/Assets.jsx";
// import Employees from "./pages/Employees.jsx";
// import Assignments from "./pages/Assignments.jsx";

// export default function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route index element={<Dashboard />} />
//         <Route path="assets" element={<Assets />} />
//         <Route path="employees" element={<Employees />} />
//         <Route path="assignments" element={<Assignments />} />
//         <Route path="*" element={<Navigate to="" replace />} />
//       </Routes>
//     </Layout>
//   );
// }
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Assets from "./pages/Assets.jsx";
import Employees from "./pages/Employees.jsx";
import Assignments from "./pages/Assignments.jsx";

function normalizeBasePath(basePath) {
  if (!basePath || basePath === "/") return "";
  return basePath.replace(/\/+$/, "");
}

export default function App({ basePath = "" }) {
  const normalizedBasePath = normalizeBasePath(basePath);

  return (
    <Layout basePath={normalizedBasePath}>
      <Routes>
        <Route index element={<Assets />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="*" element={<Navigate to={normalizedBasePath || "/"} replace />} />
      </Routes>
    </Layout>
  );
}