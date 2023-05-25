import PagesLayout from '@/layouts/PagesLayout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <PagesLayout className="font-semibold text-3xl">
      <h2 className="text-red-500">Page not found (×﹏×)</h2>
      <Link className="text-green-500 w-fit" to="/">
        Go home {'--->'}
      </Link>
    </PagesLayout>
  );
};

export default NotFound;
