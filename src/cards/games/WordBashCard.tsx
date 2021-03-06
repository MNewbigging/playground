import React from 'react';

import { Card } from '../Card';
import { OnePlayerIcon } from '../OnePlayerIcon';

import './word-bash-card.scss';

export class WordBashCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={<div className={'wb-logo'}></div>}
        title={'Word Bash'}
        icons={[<OnePlayerIcon />]}
        blurb={'Make words out of jumbled letters. Try for longer words to get more points.'}
        link={'https://mnewbigging.github.io/word-bash'}
      />
    );
  }
}
