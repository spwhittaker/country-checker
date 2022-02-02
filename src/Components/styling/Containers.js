import styled from "styled-components";
export const StyledImgContainer = styled.div`
  background: ${(props) => props.theme.lightTranslucent};

  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  margin: auto;
  padding: 0.5rem;
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
  background: ${(props) => props.theme.quaternaryBackground};

  padding: 1rem;
`;
