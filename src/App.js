import Comment from './components/Comment';

const komentar = {
  text: "This is my commentar",
  date: new Date(),
  author: {
    avatarUrl: "https://via.placeholder.com/60",
    name: "John Doe"
  }
};

function App() {
  return(
    <div>
      <Comment text={komentar.text} date={komentar.date} author={komentar.author} />
    </div>
  );
}

export default App;
