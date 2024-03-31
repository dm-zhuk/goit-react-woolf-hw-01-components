import React from 'react';

export const Statistics = ({ id, label, percentage }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="id">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="id">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="id">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="id">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="id">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};
export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, title, total }, idx) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            icon={icons[idx]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
