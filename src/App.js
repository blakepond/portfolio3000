import "./App.css";

import Nav from "./components/Nav/Nav";
import Icon from "./components/Icon";
import Wavy from "./components/Wavy/Wavy";

function App() {
   return (
      <div className="App">
         <a href="https://iwei-purple.vercel.app" target="_blank" rel="noreferrer">
            <Icon />
         </a>
         <Nav />
         <Wavy />
      </div>
   );
}

export default App;
