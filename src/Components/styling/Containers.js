import styled from "styled-components";
export const StyledImgContainer = styled.div`
  background: rgba(256, 256, 256, 0.3);

  width: 25vw;
  height: 25vw;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  vertical-align: middle;
  @media screen and (max-width: 600px) {
    width: 50vw;
    height: 50vw;
  }
`;

export const CardSearchContainer = styled.div`
  position: sticky;
  top: 0;
  display: block;
  flex-direction: column;
  justify-content: center;
  background: rgba(183, 217, 227, 0.75);
  padding: 1rem;
`;
