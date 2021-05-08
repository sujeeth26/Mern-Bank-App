import React from "react";
import "./App.css"
import { BrowserRouter, Switch, Route ,Link} from "react-router-dom";
import Customers from './components/Customers'
import Transaction from "./components/Transaction"
import AllTranx from "./components/AllTranx"
import Home from "./components/Home"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


const App = () => {
  return (
    <div>
         <div style={{position:"fixed",top:"25px",left:"20px"}}>
        <AccountBalanceIcon />
        </div>
       <div class="p-3 mb-2 bg-light text-dark" >
         <h1 style={{textAlign:"center"}}>SPARKS FOUNDATION BANKING APPLICATION</h1>
         <background url="blob:https://web.whatsapp.com/3fa03b09-15b8-4594-b78a-f27af2df81b1"/>
       
       </div>
        
        <background url="blob:https://web.whatsapp.com/3fa03b09-15b8-4594-b78a-f27af2df81b1"/>
        <BrowserRouter>
           

        <nav class="navbar navbar-dark bg-dark" style={{listStyle:"none"}}>
          <ul class="nav justify-content-center " style={{listStyle:"none"}}>
           <li className="nav-item"  ><Link className="nav-link" to="/home">Home </Link></li>
           <li className="nav-item" ><Link className="nav-link" to="/allCustomers">Customers </Link></li>
           <li className="nav-item" ><Link className="nav-link" to="/tranx">Transaction</Link></li>
           <li className="nav-item" ><Link className="nav-link" to="/allTranx">AllTransactions</Link></li>
         </ul>
       </nav>

        
         
          <Switch>
            <Route path="/allCustomers" exact component={Customers} />
            <Route path="/tranx" exact component={Transaction} />
            <Route path="/home" exact component={Home} />
            <Route path="/allTranx" exact component={AllTranx} />
          </Switch>
        </BrowserRouter>
    </div>
  );
};

export default App;