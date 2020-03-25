import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      transition: opacity 0.2s;
      background: transparent;

      &:hover {
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #555;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
