import React from 'react';
import { Container, BaseTable, Thead, Td, Th, Tr } from './index';

const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <BaseTable>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </Thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          ))}
        </tbody>
      </BaseTable>
    </Container>
  );
};

export default TransactionHistory;
