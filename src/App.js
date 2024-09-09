import 'animate.css'
import './App.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import React from 'react';
import Initial from './components/initial';
import Confirm from './components/confirm';
import Result from './components/result';
import { MyContext } from './context';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const context = React.useContext(MyContext);

  const handleComponent = () => {
    const { screen } = context.state;
    switch (screen) {
      case 0:
        return <Initial />;
      case 1:
        return <Confirm />;
      case 2:
        return <Result />;
      default:
        return <Initial />;
    }
  }

  return (
    <>
      <div className="container">
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={context.state.screen}
            timeout={500}
            classNames='fade'
          >
            {handleComponent('initial')}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
