import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import LoginPage from "./Components/LoginPage";
import EmployeeList from "./Components/EmployeeList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route exact path="/" component={LoginPage}></Route>
          <Route path="/employeelist" component={EmployeeList}></Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
