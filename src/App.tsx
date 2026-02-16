import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./app/layout";
import OrderLayout from "./app/pages/order/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/orders" element={<OrderLayout />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
