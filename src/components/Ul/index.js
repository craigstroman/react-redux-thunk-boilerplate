import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  li {
    text-align: left;
    margin-bottom: 10px;
    a {
      color: #000;
      text-decoration: none;
      &:active,
      &:hover,
      &:visited {
        color: #000;
        text-decoration: underline;
      }
    }
  }
`;

export default Ul;
