import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Estudiante from './pages/Estudiante';
import FormEstudiantes from './pages/FormEstudiantes';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Estudiante/>
        </Route>
          
        <Route exact path="/new">
          <FormEstudiantes/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
