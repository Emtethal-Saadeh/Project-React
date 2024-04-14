import React, { useContext, type ReactNode } from 'react';
import { Navigate } from "react-router-dom";
import { MyContext } from './MyContext';

interface ProtectRouterProps {
    children: ReactNode;
}

const ProtectRouter: React.FC<ProtectRouterProps> = ({ children }) => {
    const { text } = useContext(MyContext);
    if (text === '') {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
}

export default ProtectRouter;
