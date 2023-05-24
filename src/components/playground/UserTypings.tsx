import { FC } from 'react';
import Caret from './Caret';
import Character from './Character';

interface UserTypingsProps {
  userInput: string;
  className: string;
  text: string;
}

const UserTypings: FC<UserTypingsProps> = ({ userInput, className, text }) => {
  const typedCharacters = userInput.split('');
  const nextChar = text ? text[typedCharacters.length] : '';

  return (
    <div className={className}>
      {typedCharacters.map((char, idx) => {
        return <Character key={idx} actual={char} expected={text[idx]} />;
      })}
      <Caret char={nextChar} />
    </div>
  );
};

export default UserTypings;
