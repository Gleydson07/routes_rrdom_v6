import styled, { css } from 'styled-components';

export const Container = styled.section`
  p{
    font-size: 32px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .valid-access-level{
    width: 100%;
    text-align: center;
    font-weight: 700;
    padding: 8px;
    border-radius: 4px;
    margin-top: 16px;
    
    ${({ isOwner }) => isOwner ? 
      css`
        color: #002f00;
        background: #00ff00;
        border: 2px solid #00ae00;
        ` 
      : 
      css`
        color: #ffffff;
        background: #ff0000;
        border: 2px solid #840000;
      `
    };
  }

  strong{
    margin-top: 8px;
  }
`;

export const ButtonWorkitem = styled.button`
  cursor: pointer;
  margin: 8px; 
  padding: 8px;
  border-radius: 4px;

  border: 2px solid ${({ isOwner }) => isOwner ?
    css` #00ff00` :
    css` #ff0000`
  };
`;