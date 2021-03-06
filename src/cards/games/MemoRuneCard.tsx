import React from 'react';

import { Card } from '../Card';
import { LocalIcon } from '../LocalIcon';
import { TwoPlayerIcon } from '../TwoPlayerIcon';

import './memo-rune-card.scss';

export class MemoRuneCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={<div className={'mr-logo'}></div>}
        title={'Memo Rune'}
        icons={[<TwoPlayerIcon />, <LocalIcon />]}
        blurb={'Pair matching runes, with penalties for matching on certain dangerous runes.'}
        link={'https://mnewbigging.github.io/memo-rune'}
      />
    );
  }
}
