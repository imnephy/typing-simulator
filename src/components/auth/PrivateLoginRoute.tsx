import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';
import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateLoginRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { currentUser } = useAuth() as IAuthContextValue;
  return !currentUser ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateLoginRoute;
