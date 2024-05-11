/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import React, { type ReactNode } from 'react';
import { useAppStore } from '../context/app-store';

interface AuthenticateProps {
    children: ReactNode;
}

const Authenticate: React.FC<AuthenticateProps> = ({ children }) => {
    const {role} = useAppStore(); 
    
    if (role === 'Admin') {
        return <>{children}</>;
    } else {
        return null;
    }
}

export default Authenticate;
