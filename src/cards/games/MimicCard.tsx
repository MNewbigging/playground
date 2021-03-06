import React from 'react';

import { Card } from '../Card';
import { OnlineIcon } from '../OnlineIcon';
import { TwoPlayerIcon } from '../TwoPlayerIcon';

import './mimic-card.scss';

export class MimicCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={<div className={'mimic-logo'}></div>}
        title={'Mimic'}
        icons={[<TwoPlayerIcon />, <OnlineIcon />]}
        blurb={
          "Take turns making light sequences and matching your opponent's; they get longer with each round!"
        }
        link={'https://mnewbigging.github.io/mimic'}
      />
    );
  }
}
