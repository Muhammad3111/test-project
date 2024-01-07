// PrivateRoute.tsx

import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth"; // Auth contextdan foydalanish

const PrivateRoute: React.FC<{ path: string; element: React.ReactNode }> = ({
  path,
  element,
}) => {
  const { user } = useAuth(); // Foydalanuvchini tekshirish
  return user ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
