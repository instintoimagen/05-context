import "./App.css";
import MyPageContext from "./components/MyPageContext";
import MyPage from "./components/MyPage";

function App() {
  return (
    <div className="App">
      <h1>React {<i>Context</i>}</h1>
      <hr />
      <h3>Teoría</h3>
      <h4>
        <a
          href="https://es.reactjs.org/docs/context.html"
          target="_bank"
          rel="noreferrer"
        >
          doc of context
        </a>
      </h4>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
