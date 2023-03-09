import React, {useState} from 'react';
import './App.css';
import FullInput from './components/FullInput';


function App() {
    let [message, setMessage] = useState([
        {messageTitle: 'message1'},
        {messageTitle: 'message2'},
        {messageTitle: 'message3'}
    ])

    const addMessage = (newTitleMessage: string) => {
        let newMessage = {messageTitle: newTitleMessage};
        message = [newMessage, ...message];
        setMessage(message);
    }

    return (
        <div className={'App'}>
            <FullInput addMessage={addMessage}/>
            {message.map((m, index) =>
                <div key={index}>{m.messageTitle}</div>)}
        </div>
    )

}

export default App;
