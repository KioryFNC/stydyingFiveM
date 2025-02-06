import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/LayoutDefault"
import { Dashboard } from "./pages/Dashboard";
import { Financial } from "./pages/Financial";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/financeiro" element={<Financial />} />
      </Route>
    </Routes>
  )
}