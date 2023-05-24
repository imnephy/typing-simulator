import { replaceDoubleSpaces } from '@/utils/helpers';
import axios from 'axios';

const getText = async () => {
  let { data } = await axios.get('https://baconipsum.com/api/?paras=5&type=all-meat');
  data = data.map((sentence: string) => replaceDoubleSpaces(sentence));
  console.log(data);

  return data;
};

export default getText;
