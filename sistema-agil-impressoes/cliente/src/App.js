import Produtos from './componentes/Produtos';
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
           <Produtos key={produto._id} produto={produto}></Produtos>
          
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
