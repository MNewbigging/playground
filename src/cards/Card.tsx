import React from 'react';

import './card.scss';

interface CardProps {
  logo: JSX.Element;
  points: string[];
  blurb: string;
  link: string;
  buttonClass: string;
}

export class Card extends React.PureComponent<CardProps> {
  public render() {
    const { logo, blurb, link, buttonClass } = this.props;
    return (
      <div className={'card'}>
        <div className={'upper'}>{logo}</div>
        <div className={'lower'}>
          <div className={'points'}>{this.renderPoints()}</div>
          <div className={'blurb'}>{blurb}</div>
          <div className={'play-button ' + buttonClass}>
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
