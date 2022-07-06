import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div {
    /* Tüm elemanların büyümesine izin ver */
    flex-grow: 1;
    /* Tüm div'lerin eşit miktarda alan tutabilmesine izin evr */
    flex-basis: 0;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;
