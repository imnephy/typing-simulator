import { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';
import { User } from 'firebase/auth';
import AuthLayout from '@/layouts/AuthLayout';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth() as IAuthContextValue;
  const handleLogout = async () => {
    setError('');

    try {
      await logout();
    } catch {
      setError('Failed to log out.');
    }
  };

  return (
    <AuthLayout>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {(currentUser as User).email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </AuthLayout>
  );
}
