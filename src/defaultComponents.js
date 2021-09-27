import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import Example from './example';
//import App from './App';

function DopComponent({incrementCount, helloText, count, isAdmin}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          {helloText}
        </span>
        <span>
          Learn React
        </span>
        <div className="but">
          <Button
            variant="outlined"
            color="primary"
            className="App-link"
            href="https://youtu.be/2g811Eo7K8U"
            target="_blank"
            rel="noopener noreferrer"
          >
            Посмотреть видео
          </Button>
        </div>
        <div className="but">
          <a
            className="App-link"
            href="https://youtu.be/2g811Eo7K8U"
            target="_blank"
            rel="noopener noreferrer"
          >
            Посмотреть видео
          </a>
        </div>
      </header>
      <div>
        <Example />
      </div>
    </div>
  );
}

DopComponent.propTypes = {
  count: PropTypes.number.isRequired,

  helloText: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default DopComponent;
