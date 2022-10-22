import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  background: #00000050;
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  background: #FFFFFF;
  border-radius: 4px;

  > div{
    height: 250px;
  }

  footer{
    height: auto;

    button {
      cursor: pointer;
    }
  }
`;