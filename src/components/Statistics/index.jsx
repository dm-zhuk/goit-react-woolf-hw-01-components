import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  background: #fefce6;
  max-width: 460px;
  margin: 32px auto;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #85683e;
  text-align: center;
  padding: 24px 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const Label = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  color: #fcf0f0;
  padding-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #fcf0f0;
`;
