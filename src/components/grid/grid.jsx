import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 90rem;
  margin: auto;
  padding: 2rem 1rem;
  grid-template-columns: repeat(var(--columns, 1), 1fr);

  @media (min-width: 1250px) {
    .Grid {
      --columns: 2;
    }
  }

  @media (min-width: 1800px) {
    .Grid {
      --columns: 3;
    }
  }
`;

const Grid = ({ children }) => <StyledGrid>{children}</StyledGrid>;

export default Grid;
