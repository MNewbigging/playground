import React from 'react';

import { Card } from '../Card';
import { LocalIcon } from '../LocalIcon';
import { OnePlayerIcon } from '../OnePlayerIcon';

import './task-log-card.scss';

export class TaskLogCard extends React.PureComponent {
  public render() {
    return (
      <Card
        logo={<div className={'tl-logo'}></div>}
        title={'Task Log'}
        icons={[<OnePlayerIcon />, <LocalIcon />]}
        blurb={
          'Track your tasks in this sci-fi themed task log app. Tasks persist between sessions.'
        }
        link={'https://mnewbigging.github.io/task-log'}
      />
    );
  }
}
