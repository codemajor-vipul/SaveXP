import './App.css';
import { Route,Switch,useHistory } from 'react-router-dom';
import Analytics from './Components/Analytics/Analytics';
import Expenditure from './Components/Expenditures/Expenditure';
import Savings from './Components/Savings';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import Home from './Components/Home';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  const history = useHistory();
  const Redirects = () => {
    alert("clicked");
    history.push({pathname:"/about", state:{Name :"Sneha", Address:"LAllu Colony"}});
  };
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Expenditure" exact>
            <Expenditure />
          </Route>
          <Route path="/Savings" exact>
            <Savings />
          </Route>
          <Route path="/Analytics" exact>
            <Analytics />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
