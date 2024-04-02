/* В компоненті Statistics для заголовка повинен бути рендер по умові. Якщо переданий prop title потрібно рендерити заголовок */

import React from 'react';
import {
  StatisticsWrapper,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => (
  <StatisticsWrapper>
    {title && <Title>{title}</Title>}
    <StatList>
      {stats.map(({ id, label, percentage }) => {
        const backgroundColor = getRandomColor();

        return (
          <StatItem key={id} backgroundColor={backgroundColor}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        );
      })}
    </StatList>
  </StatisticsWrapper>
);

function getRandomColor() {
  const letters = '56789ABC';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 8)];
  }
  return color;
}

export default Statistics;

//  Code without randomColor  //
/* const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics; */
