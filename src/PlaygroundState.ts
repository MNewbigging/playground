import { action, observable } from 'mobx';

export enum NavTab {
  GAMES = 'GAMES',
  APPS = 'APPS',
  RANDOM = 'RANOMD',
}

export class PlaygroundState {
  @observable public selectedTab = NavTab.GAMES;

  @action setSelectedTab(tab: NavTab) {
    this.selectedTab = tab;
  }
}
