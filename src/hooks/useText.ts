import getText from '@/API/getText';
import { useEffect, useState } from 'react';

const useText = () => {
  const [texts, setTexts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const currentText = texts[currentIndex];

  useEffect(() => {
    fetchTextFromApi();
  }, []);

  const fetchTextFromApi = async () => {
    try {
      setIsLoading(true);
      const texts = await getText();
      setTexts([...texts]);
      setCurrentIndex(texts.length - 1);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateText = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return { currentText, updateText, fetchTextFromApi, isLoading };
};

export default useText;
