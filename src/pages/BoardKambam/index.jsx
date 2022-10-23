import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { useAuthentication } from '../../hooks/useAuth';
import { replaceRouteParams } from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';
import { api } from '../../services/api';

import {
  Container, ModalContent
} from './styles';

export const BoardKambam = () => {
  const navigate = useNavigate();
  const { getAuth } = useAuthentication();
  const {workspaceId, boardId} = useParams();
  const {search} = useLocation();
  const [workitemsList, setWorkitemsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [workitem, setWorkitem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = (id) => {
    navigate(replaceRouteParams(AllRoutes.boardKambam.route, [
      {name: 'workspaceId', value: workspaceId},
      {name: 'boardId', value: boardId},
    ], `workitemId=${id}`));
  }

  const handleCloseModal = () => {
    navigate(replaceRouteParams(AllRoutes.boardKambam.route, [
      {name: 'workspaceId', value: workspaceId},
      {name: 'boardId', value: boardId},
    ]));
    setModalIsOpen(false);
  }

  useEffect(() => {
    (async() => {
      const response = await api.get(`/workitems?boardId=${boardId}`);
      setWorkitemsList(response.data);
      setLoading(false);
    })()
  }, [boardId]);

  useEffect(() => {
    if (search) {
      getAuth();
      const workitemId = +search.split('=')[1];
      const workitemFiltered = workitemsList.find((item) => item.id === workitemId);
      setWorkitem(workitemFiltered);
      setModalIsOpen(!!workitemFiltered);
    }
  }, [search, workitemsList]);

  return (
    <Container>
      <p>BOARD QUADRO</p>

      {loading ? 
        <div>
          <span>Carregando...</span>
        </div>
        :
        <div>
          {workitemsList.length ? workitemsList.map(({id, name}) => (
            <button
              style={{cursor: "pointer", margin: "8px", padding:"8px"}}
              key={id}
              onClick={() => handleClick(id)}
            >
              {name}
            </button>
          )) : <span>Não há dados para listar.</span>}
        </div>
      }

    <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
      <ModalContent>
        <h4>Detalhes do item de trabalho:</h4>
        <strong>Id: {workitem?.id}</strong>
        <strong>BoardId: {workitem?.boardId}</strong>
        <strong>Name: {workitem?.name}</strong>
      </ModalContent>
    </Modal>
    </Container>
  )
}
