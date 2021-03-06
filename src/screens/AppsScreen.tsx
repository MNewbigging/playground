import React from 'react';

import { BletherCard } from '../cards/apps/BletherCard';
import { TaskLogCard } from '../cards/apps/TaskLogCard';

export class AppsScreen extends React.PureComponent {
  public render() {
    return (
      <>
        <TaskLogCard />
        <BletherCard />
      </>
    );
  }
}
