
import './App.css';
import Nav from './component/Nav.jsx'
import Home from './component/Home';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
      <Nav />
        <Home />
      </Provider>
    </>
  );
}

export default App;
