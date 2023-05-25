import HomeNavigation from '@/components/home/HomeNavigation';
import PagesLayout from '@/layouts/PagesLayout';

const Home = () => {
  return (
    <PagesLayout>
      <h2 className="text-4xl pb-3">Welcome to Touch typing simulator!</h2>
      <HomeNavigation />
    </PagesLayout>
  );
};

export default Home;
