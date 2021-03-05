import React from 'react';
import { WordBashCard } from '../cards/games/WordBashCard';

export class GamesScreen extends React.PureComponent {
  public render() {
    return (
      <>
        <WordBashCard />
      </>
    );
  }
}
