import { BrowserRouter } from 'react-router-dom';
import Main from "./Components/Main/Main";
import './App.css';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </div>
  );
}
export default App;
