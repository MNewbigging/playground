import React from 'react';
import { Card } from '../Card';
import { MultiPlayerIcon } from '../MultiPlayerIcon';
import { OnlineIcon } from '../OnlineIcon';

import './blether-card.scss';

export class BletherCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={<div className={'bl-logo'}></div>}
        title={'blether'}
        icons={[<MultiPlayerIcon />, <OnlineIcon />]}
        blurb={'Online web messenger app. Invite your friends for a blether!'}
        link={'https://mnewbigging.github.io/blether'}
      />
    );
  }
}
