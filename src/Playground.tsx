import { observer } from 'mobx-react';
import React from 'react';

import { NavTab, PlaygroundState } from './PlaygroundState';
import { AppsScreen } from './screens/AppsScreen';
import { GamesScreen } from './screens/GamesScreen';
import { RandomScreen } from './screens/RandomScreen';

import './playground.scss';

@observer
export class Playground extends React.PureComponent {
  private readonly pgState = new PlaygroundState();
  public render() {
    // Which screen are we looking at?
    let toRender: JSX.Element;
    switch (this.pgState.selectedTab) {
      case NavTab.GAMES:
        toRender = <GamesScreen />;
        break;
      case NavTab.APPS:
        toRender = <AppsScreen />;
        break;
      case NavTab.RANDOM:
        toRender = <RandomScreen />;
        break;
    }

    return (
      <div className={'playground'}>
        <div className={'navbar'}>
          <div
            className={'games heading ' + this.getTabClass(NavTab.GAMES)}
            onClick={() => this.pgState.setSelectedTab(NavTab.GAMES)}
          >
            Games
          </div>
          <div
            className={'apps heading ' + this.getTabClass(NavTab.APPS)}
            onClick={() => this.pgState.setSelectedTab(NavTab.APPS)}
          >
            Apps
          </div>
          <div
            className={'random heading ' + this.getTabClass(NavTab.RANDOM)}
            onClick={() => this.pgState.setSelectedTab(NavTab.RANDOM)}
          >
            Random
          </div>
        </div>
        <div className={'body'}>{toRender}</div>
      </div>
    );
  }

  private getTabClass(tab: NavTab) {
    return tab === this.pgState.selectedTab ? 'active' : '';
  }
}
