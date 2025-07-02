// src/components/Typewriter.tsx
import { Typewriter } from 'react-simple-typewriter';

type Props = {
  words: string[];
};

export const TypewriterEffect = ({ words }: Props) => {
  return (
    <span style={{ color: 'var(--accent)' }}>
      <Typewriter
        words={words}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};
