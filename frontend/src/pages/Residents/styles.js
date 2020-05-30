import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }

  header {
    display: flex;
    justify-content: space-between;

    button {
      border: 0;
      background: none;
      margin: 5px;
    }
  }
`;

export const Resident = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    padding: 2px;
    color: #d82b2b;
    margin-top: 3px;
  }

  p {
    display: block;
    margin-top: 3px;
  }

  button {
    border: 0;
    background: none;
    margin-top: 10px;
    margin-right: 10px;
  }
`;
