import { replaceDoubleSpaces } from '@/utils/helpers';
import axios from 'axios';

const getText = async () => {
  try {
    const response = await axios.get('https://baconipsum.com/api/?paras=5&type=all-meat');
    const data = response.data.map((sentence: string) => replaceDoubleSpaces(sentence));
    return data;
  } catch (error) {
    console.error('Error fetching text from API:', error);
    throw error;
  }
};

export default getText;
