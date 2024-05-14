import React, { type ReactNode } from 'react';
import { Navigate } from "react-router-dom";
import { useAppStore } from './context/app-store';

interface ProtectRouterProps {
    children: ReactNode;
}

const ProtectRouter: React.FC<ProtectRouterProps> = ({ children }) => {
    const { username } = useAppStore();
    if (username === "") return <Navigate to="/login" />;
    return <>{children}</>;
}

export default ProtectRouter;
