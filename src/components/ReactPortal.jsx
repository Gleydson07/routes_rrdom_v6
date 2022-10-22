import ReactDOM from 'react-dom';

export default function ReactPortal({portalId = 'portal-root', children}){
  const container = document.getElementById(portalId);

  if (!container) {
    const container = document.createElement('div');
    container.setAttribute('id', portalId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, document.getElementById(portalId));
}