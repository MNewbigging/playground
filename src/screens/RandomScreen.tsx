import React from 'react';
import { MemoRuneCard } from '../cards/games/MemoRuneCard';
import { MimicCard } from '../cards/games/MimicCard';
import { WordBashCard } from '../cards/games/WordBashCard';

export class RandomScreen extends React.PureComponent {
  public render() {
    return (
      <>
        <WordBashCard />
        <MemoRuneCard />
        <MimicCard />
        <WordBashCard />
        <MemoRuneCard />
        <MimicCard />
        <WordBashCard />
        <MemoRuneCard />
        <MimicCard />
      </>
    );
  }
}
