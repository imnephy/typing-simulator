import AuthProvider from '@/contexts/AuthContext';
import RootLayout from '@/layouts/RootLayout';
import About from '@/pages/About';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Playground from '@/pages/Playground';
import Dashboard from '@/pages/auth/Dashboard';
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import PrivateLoginRoute from './auth/PrivateLoginRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="playground" element={<Playground />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PrivateLoginRoute>
            <Signup />
          </PrivateLoginRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PrivateLoginRoute>
            <Login />
          </PrivateLoginRoute>
        }
      />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
