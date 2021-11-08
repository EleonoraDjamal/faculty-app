// import Comment from './components/Comment';

// const komentar = {
//   text: "This is my commentar",
//   date: new Date(),
//   author: {
//     avatarUrl: "https://via.placeholder.com/60",
//     name: "John Doe"
//   }
// };

// import HomePage from './pages/HomePage';
// import EmployeePage from './pages/EmployeePage';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// function App() {
//   return(
//     <Router>
//       <div>
//         {/* <Comment text={komentar.text} date={komentar.date} author={komentar.author} /> */}

//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/employee" component={EmployeePage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// import ExampleStateHook from './components/ExampleStateHook';
// import Counter from './components/Counter';

// import Penghitung from './components/Penghitung';

import Message from './components/Message';

function App() {
  return(
    <div>
      {/* <h1>React Hook: useState</h1>
      <ExampleStateHook startValue={100} namaUser="Fitriani" />
      <Counter /> */}
      <Message />
    </div>
  );
}

export default App;
