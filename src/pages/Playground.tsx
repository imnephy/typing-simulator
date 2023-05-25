import { calculateAccuracyPercentage } from '@/utils/helpers';
import CountdownTimer from '../components/playground/CountdownTimer';
import GeneratedText from '../components/playground/GeneratedText';
import RestartButton from '../components/playground/RestartButton';
import Results from '../components/playground/Results';
import UserTypings from '../components/playground/UserTypings';
import useEngine from '@/hooks/useEngine';
import TextWrapper from '@/components/playground/wrappers/TextWrapper';
import PlaygroundWrapper from '@/components/playground/wrappers/PlaygroundWrapper';
import Spiner from '@/components/playground/Spiner';

const Playground = () => {
  const { phase, currentText, isLoading, timeLeft, typed, errors, totalTyped, restart, pb } =
    useEngine();
  const isFinish = phase === 'finish';
  return (
    <PlaygroundWrapper isLoading={isLoading}>
      <div className="flex flex-col justify-center items-center relative">
        {phase === 'start' && !isLoading && (
          <div className="animate-pulse absolute top-0">Start typing to begin!</div>
        )}
        {isLoading && <Spiner />}
        {!isFinish && !isLoading && (
          <>
            <CountdownTimer timeLeft={timeLeft} />
            <TextWrapper>
              <GeneratedText text={currentText} />
              <UserTypings text={currentText} userInput={typed} className="absolute inset-0" />
            </TextWrapper>
            <RestartButton onRestart={restart} />
          </>
        )}
        <Results
          onRestart={restart}
          phase={phase}
          errors={errors}
          accuracy={calculateAccuracyPercentage(errors, totalTyped)}
          total={totalTyped}
          pb={pb}
        />
      </div>
    </PlaygroundWrapper>
  );
};

export default Playground;
