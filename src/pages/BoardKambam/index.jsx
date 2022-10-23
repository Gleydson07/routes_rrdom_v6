import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { useAuthentication } from '../../hooks/useAuth';
import { replaceRouteParams } from '../../routes/replaceRouteParams';
import { AllRoutes } from '../../routes/RouteNames';

import {
  ButtonWorkitem,
  Container, ModalContent
} from './styles';

export const BoardKambam = () => {
  const navigate = useNavigate();
  const { getAuth, hasValidToken, loadUserAuthorization } = useAuthentication();
  const { workspaceId, boardId } = useParams();
  const { search } = useLocation();
  const [ workitemsList, setWorkitemsList ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ workitem, setWorkitem ] = useState(null);
  const [ isWorkitemOwner, setIsWorkitemOwner ] = useState(false);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

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
    if (search) {
      const session = getAuth();
      const workitemId = +search.split('=')[1];
      const workitemFiltered = workitemsList.find((item) => item.id === workitemId);
      setWorkitem(workitemFiltered);
      setModalIsOpen(!!workitemFiltered);
      setIsWorkitemOwner(workitemFiltered?.ownerId === session?.id);
    }
  }, [search, workitemsList, getAuth]);

  useEffect(() => {
    (async() => {
      const {workspaces} = await loadUserAuthorization();

      const boardsIndex = workspaces.findIndex(item => item.id === +workspaceId);
      if (boardsIndex === -1) {
        navigate(AllRoutes.workspaces.route);
        return 0;
      }
      
      const workitemsIndex = workspaces[boardsIndex].boards.findIndex(item => item.id === +boardId);
      if (workitemsIndex === -1) {
        navigate(AllRoutes.workspaces.route);
        return 0;
      }

      const userSession = hasValidToken();
      setWorkitemsList(workspaces[boardsIndex].boards[workitemsIndex].workitems.map(item => ({
        ...item,
        isOwner: item?.ownerId === userSession?.id
      })));
      setLoading(false);
    })()
  }, [boardId]);

  return (
    <Container>
      <p>BOARD QUADRO</p>

      {loading ? 
        <div>
          <span>Carregando...</span>
        </div>
        :
        <div>
          {workitemsList.length ? workitemsList.map(({id, name, isOwner}) => (
            <ButtonWorkitem
              isOwner={isOwner}
              key={id}
              onClick={() => handleClick(id)}
            >
              {name}
            </ButtonWorkitem>
          )) : <span>Não há dados para listar.</span>}
        </div>
      }

    <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
      <ModalContent isOwner={isWorkitemOwner}>
        <h4>Detalhes do item de trabalho:</h4>
        <strong>Id: {workitem?.id}</strong>
        <strong>BoardId: {workitem?.boardId}</strong>
        <strong>Name: {workitem?.name}</strong>

        <div className='valid-access-level'>{isWorkitemOwner ? 'OWNER' : "MEMBER"}</div>
      </ModalContent>
    </Modal>
    </Container>
  )
}
