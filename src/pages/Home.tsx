import Button from '@/components/UI/Button';
import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';
import PagesLayout from '@/layouts/PagesLayout';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { currentUser } = useAuth() as IAuthContextValue;
  const navigate = useNavigate();
  return (
    <PagesLayout>
      <h2 className="text-4xl pb-3">Welcome to Touch typing simulator</h2>
      <Button onClick={() => navigate('playground')} className="font-semibold text-2xl">
        Start Game!
      </Button>
      {!currentUser && (
        <div className="flex items-stretch justify-stretch gap-2">
          <Button onClick={() => navigate('signup')}>Sign Up</Button>
          <Button onClick={() => navigate('login')}>Log In</Button>
        </div>
      )}
    </PagesLayout>
  );
};

export default Home;
