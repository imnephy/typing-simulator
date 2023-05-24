import { useAuth, IAuthContextValue } from '@/contexts/AuthContext';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthButtons = () => {
  const { currentUser, logout } = useAuth() as IAuthContextValue;
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {!['/login', '/signup'].includes(location.pathname) &&
        (currentUser ? (
          <Button onClick={() => logout()}>Log out</Button>
        ) : (
          <>
            <Button onClick={() => navigate('/login')}>Log in</Button>
            <Button onClick={() => navigate('/signup')}>Sign up</Button>
          </>
        ))}
    </>
  );
};

export default AuthButtons;
