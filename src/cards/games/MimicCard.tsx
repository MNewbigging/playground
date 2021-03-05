import React from 'react';

import { Card } from '../Card';

import './mimic-card.scss';

export class MimicCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={this.renderLogo()}
        points={['2 player', 'Online']}
        blurb={
          "Take turns making light sequences and matching your opponent's; they get longer with each round!"
        }
        link={''}
        buttonClass={'mimic-play-button'}
      />
    );
  }

  private renderLogo() {
    return <div className={'mimic-logo'}>mimic</div>;
  }
}
