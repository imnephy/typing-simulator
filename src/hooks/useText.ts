import getText from '@/API/getText';
import { useEffect, useState } from 'react';

const useText = () => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const currentText = data[currentIndex];

  useEffect(() => {
    fetchTextFromApi();
  }, []);

  const fetchTextFromApi = async () => {
    try {
      setIsLoading(true);
      const data = await getText();
      setData([...data]);
      setCurrentIndex(data.length - 1);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateText = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return { currentText, updateText, fetchTextFromApi, isLoading };
};

export default useText;
