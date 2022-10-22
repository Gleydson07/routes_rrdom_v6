import React from 'react';
import ReactPortal from '../ReactPortal';

import {
  Container, Overlay
} from './styles';

export const Modal = ({isOpen, onClose, children}) => {

  if (!isOpen) {
    return <></>
  }

  return (
    <ReactPortal portalId='portal-modal'>
      <Overlay onClick={onClose}>
        <Container>
          <div>
            {children}
          </div>
          <footer>
            <button onClick={onClose}>FECHAR</button>
          </footer>
        </Container>
      </Overlay>
    </ReactPortal>
  )
}
