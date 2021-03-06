import React from 'react';

import './card.scss';

interface CardProps {
  logo: JSX.Element;
  title: string;
  icons: JSX.Element[];
  blurb: string;
  link: string;
}

export class Card extends React.Component<CardProps> {
  public render() {
    const { logo, title, blurb, link } = this.props;
    return (
      <div className={'card'}>
        <div className={'upper'}>
          <div className={'logo'}>{logo}</div>
        </div>
        <div className={'lower'}>
          <div className={'title heading'}>{title}</div>
          <div className={'points'}>{this.renderIcons()}</div>
          <div className={'blurb'}>{blurb}</div>
          <div className={'play-button'}>
            <a href={link} target={'_blank'}>
              play
            </a>
          </div>
        </div>
      </div>
    );
  }

  private renderIcons() {
    const { icons } = this.props;

    return (
      <div className={'icons'}>
        {icons &&
          icons.map((icon, i) => (
            <div key={'icon-' + i} className={'icon'}>
              {icon}
            </div>
          ))}
      </div>
    );
  }
}
