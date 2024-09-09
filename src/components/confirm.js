import React from 'react';
import { MyContext } from '../context';

const Confirm = () => {
    const context = React.useContext(MyContext);

    return (
        <div>
            <h3>Your Question is:</h3>
            <div className='viewer'>{context.state.question}</div>
            <div className='animate__animated animate__bounceIn animate__delay-1s'>
                <hr/>
                <button className="btn btn-primary" onClick={() => context.setScreen(2)}>Decide it</button>
                <button className="btn btn-primary" onClick={() => context.setScreen(0)}>Ask a new question</button>
            </div>
        </div>
    );
}

export default Confirm;