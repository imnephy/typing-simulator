import React, { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container className="min-w-[35vw]">{children}</Container>;
};

export default AuthLayout;
