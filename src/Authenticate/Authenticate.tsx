/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import React, { type ReactNode } from 'react';
import { useAppStore } from '../context/app-store';

interface AuthenticateProps {
    allowedRoles:string[],
    children: ReactNode;
}

const Authenticate: React.FC<AuthenticateProps> = ({ children , allowedRoles}) => {
    const {role} = useAppStore(); 
    const isAllowed=allowedRoles.includes(role ?? ''); 
    if (isAllowed) {
        return <>{children}</>;
    } else {
        return null;
    }
}

export default Authenticate;
