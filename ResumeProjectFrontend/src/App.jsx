import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Navigation";
import PageContent from "./Components/PageContent";

function App() {
  return (
    <>
      <div>
        <Navigation/>
        <PageContent/>
      </div>
    </>
  );
}

export default App;
