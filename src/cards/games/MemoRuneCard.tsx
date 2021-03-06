import React from 'react';

import { Card } from '../Card';

import './memo-rune-card.scss';

export class MemoRuneCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={this.renderLogo()}
        title={'Memo Rune'}
        points={['1 or 2 players', 'Offline']}
        blurb={'Pair matching runes, with penalties for matching on certain dangerous runes.'}
        link={'https://mnewbigging.github.io/memo-rune'}
      />
    );
  }

  private renderLogo() {
    return (
      <div className={'mr-logo'}>
        <div>MEMO</div>
        <div>RUNE</div>
      </div>
    );
  }
}
