import React, { useContext, type ReactNode } from 'react';
import { Navigate } from "react-router-dom";
import { useNameStore } from './context/userNameStore';

interface ProtectRouterProps {
    children: ReactNode;
}

const ProtectRouter: React.FC<ProtectRouterProps> = ({ children }) => {
    const { username } = useContext(useNameStore);
    if (username === '') {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
}

export default ProtectRouter;
