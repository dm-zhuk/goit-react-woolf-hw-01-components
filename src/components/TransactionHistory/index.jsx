import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 580px;
  margin: 32px auto;
`;

export const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const Thead = styled.thead`
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 12px;
  border: 1px solid #727070;
  color: #050505;
  text-transform: capitalize;
`;

export const Th = styled.th`
  padding: 12px;
  border: 1px solid #e7eeee;
  color: #fff;
  background-color: #38839a;
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #fff;
  }
`;
