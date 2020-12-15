import styled from "styled-components";

export const ModalBg = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 8% auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #888;
  width: 80%;
  max-width: 12in;
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;
