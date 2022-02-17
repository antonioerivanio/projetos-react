import React from 'react';

const PassoAPassoCompra = (props) => {
  return (
    <div className="row passos-compra">
      <div className={props.passo1 ? 'active' : ''}>Entrar no Sistema</div>
      <div className={props.passo2 ? 'active' : ''}>Envio</div>
      <div className={props.passo3 ? 'active' : ''}>Pagamento</div>
      <div className={props.passo4 ? 'active' : ''}>Local Pedido</div>
    </div>
  );
};

export default PassoAPassoCompra;
