import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';

const HomeNavigation = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth() as IAuthContextValue;
  return (
    <>
      <Button onClick={() => navigate('playground')} className="font-semibold text-2xl">
        Start Game!
      </Button>
      {!currentUser && (
        <div className="flex items-stretch justify-stretch gap-2">
          <Button onClick={() => navigate('signup')}>Sign Up</Button>
          <Button onClick={() => navigate('login')}>Log In</Button>
        </div>
      )}
    </>
  );
};

export default HomeNavigation;
