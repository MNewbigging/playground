import React from 'react';

import { Card } from '../Card';

export class WordBashCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={<div>logo</div>}
        points={['Single player', 'Offline']}
        blurb={'Make words out of jumbled letters. Try for longer words to get more points.'}
        link={'https://mnewbigging.github.io/word-bash'}
      />
    );
  }
}
