// import Comment from './components/Comment';

// const komentar = {
//   text: "This is my commentar",
//   date: new Date(),
//   author: {
//     avatarUrl: "https://via.placeholder.com/60",
//     name: "John Doe"
//   }
// };

import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return(
    <Router>
      <div>
        {/* <Comment text={komentar.text} date={komentar.date} author={komentar.author} /> */}

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/employee" component={EmployeePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
