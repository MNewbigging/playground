import React from 'react';

import { Card } from '../Card';

import './word-bash-card.scss';

export class WordBashCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={this.renderWbLogo()}
        points={['Single player', 'Offline']}
        blurb={'Make words out of jumbled letters. Try for longer words to get more points.'}
        link={'https://mnewbigging.github.io/word-bash'}
        buttonClass={'wb-play-button'}
      />
    );
  }

  private renderWbLogo() {
    return <div className={'wb-logo'}>{/* <div>WORD</div>
        <div>BASH</div> */}</div>;
  }
}
