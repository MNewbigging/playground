import React from 'react';

import './card.scss';

interface CardProps {
  logo: JSX.Element;
  title: string;
  points: string[];
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
          <div className={'points'}>{this.renderPoints()}</div>
          <div className={'blurb'}>{blurb}</div>
          <div className={'play-button'}>
            {' '}
            <a href={link} target={'_blank'}>
              play
            </a>
          </div>
        </div>
      </div>
    );
  }

  private renderPoints() {
    const { points } = this.props;
    return (
      <ul>
        {points.map((p, i) => (
          <li key={p + i}>{p}</li>
        ))}
      </ul>
    );
  }
}
