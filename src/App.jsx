import "./App.scss";
import Footer from "./footer";
import Todolist from "./todo-list";


function App() {
  return (
    <>
      <div className="main-container">
        <div className="background-img" />
        <Todolist />
        <div className="background" />
        <Footer />
      </div>
    </>
  );
}

export default App;
