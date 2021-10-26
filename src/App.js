import logo from './logo.svg';
import './App.css';
import {Message} from './components/message/Message'

function App() {
    const message = 'World';

  return (
    <div className="App">
      <header className="App-header">
        <img src='https://irl.by/wp-content/uploads/2017/08/52_nc7DbtMU-850x607.jpg' className="App-logo" alt="logo" />
            <Message text={ message }/>
      </header>
    </div>
  );
}

export default App;
