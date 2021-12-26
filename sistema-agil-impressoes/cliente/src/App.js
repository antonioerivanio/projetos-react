import dadosProdutos from './utils/dadosProdutos';
import './utils/style.css'


function App() {
  return (
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="index.html">amazona</a>
      </div>
      <div>
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <main>
      <div>
        <div className="row center">
        {
          dadosProdutos.produtos.map(produto =>(
            <div key={produto._id} className="card">
            <a href={`/produto/${produto._id}`}>
             { /* image size: 680px by 830px */} 
              <img className="medium" src={produto.image} alt={produto.nome} />
            </a>
            <div className="card-body">
            <a href={`/produto/${produto._id}`}>
                <h2>{produto.nome}</h2>
              </a>
              <div className="rating">
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
              </div>
              <div className="preco">R$ {produto.preco}</div>
            </div>
          </div>
          
          ))
        }
        </div>
      </div>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  );
}

export default App;
