import styled from 'styled-components';

const MoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export default MoviesList;
