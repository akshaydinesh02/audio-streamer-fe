import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import React from "react";
import { useRecoilState } from "recoil";
import { authSheetOpen } from "../../state/atoms/globalAtoms";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [, setOpen] = useRecoilState(authSheetOpen);

  if (!user) {
    setOpen(true);
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
