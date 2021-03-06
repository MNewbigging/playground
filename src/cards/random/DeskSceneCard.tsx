import React from 'react';

import { Card } from '../Card';
import { LocalIcon } from '../LocalIcon';
import { OnePlayerIcon } from '../OnePlayerIcon';

import './desk-scene-card.scss';

export class DeskSceneCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={<div className={'ds-logo'}></div>}
        title={'Desk Scene'}
        icons={[<OnePlayerIcon />, <LocalIcon />]}
        blurb={
          'Early attempt at drawing with css. The computer turns on, and features an old-school screen-off animation!'
        }
        link={'https://mnewbigging.github.io/desk-scene'}
      />
    );
  }
}
