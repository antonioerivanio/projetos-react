import React from 'react'
import Avaliacao from './Avaliacao'

const Produtos = ({produto}) => {
    return (
        <div className="card">
        <a href={`/produto/${produto._id}`}>
         { /* image size: 680px by 830px */} 
          <img className="medium" src={produto.image} alt={produto.nome} />
        </a>
        <div className="card-body">
        <a href={`/produto/${produto._id}`}>
            <h2>{produto.nome}</h2>
          </a>
         <Avaliacao produto={produto} />
          <div className="preco">R$ {produto.preco}</div>
        </div>
      </div>
    )
}

export default Produtos
