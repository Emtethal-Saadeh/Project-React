import React, { useContext, type ReactNode } from 'react';
import { Navigate } from "react-router-dom";
import { useAppStore } from './context/userNameStore';

interface ProtectRouterProps {
    children: ReactNode;
}

const ProtectRouter: React.FC<ProtectRouterProps> = ({ children }) => {
    const { username } = useContext(useAppStore);
    if (username === "") return <Navigate to="/login" />;
    return <>{children}</>;
}

export default ProtectRouter;
