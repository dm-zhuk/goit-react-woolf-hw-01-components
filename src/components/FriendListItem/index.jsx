import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  min-width: 350px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  padding: 12px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  margin: auto 24px;
`;

export const Avatar = styled.img`
  display: flex;
  padding: 4px;
  width: 48px;
  background-color: #e8e8c8;
  border: 2px solid #ccc;
  border-radius: 12%;
`;

export const Name = styled.h2`
  text-transform: capitalize;
  padding-left: 24px;
`;
