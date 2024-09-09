import React from 'react';
import { MyContext } from '../context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Initial = () => {

    const textRef = React.useRef();
    const [question, setQuestion] = React.useState('');
    const context = React.useContext(MyContext);
    const handleOnChaqnge = (e) => {
        let question = e.target.value;
        setQuestion(question);
    }

    const handleOnNext = () => {
        if (question.length >= 30) {
            toast.error('The question is too long', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }
        if (question.length < 5) {
            toast.error('The question is too short', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }
        context.setScreen(1);
    }

    return (
        <div>
            <h1>Ask a Question:</h1>
            <input
                ref={textRef}
                type="text"
                name='question'
                placeholder="Type your question here"
                className="form-control" onChange={(e) => handleOnChaqnge(e)} />
                <button className="btn btn-primary animate__animated animate__fadeIn" onClick={() => handleOnNext(1)}>Next</button>
        </div>
    );
}

export default Initial;