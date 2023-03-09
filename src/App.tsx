import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';


function App() {
    let [message, setMessage] = useState([
        {messageTitle: 'message1'},
        {messageTitle: 'message2'},
        {messageTitle: 'message3'}
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title:string) => {
        let newMessage = {messageTitle: title};
        setMessage([newMessage, ...message]);
        setTitle('');
    }

    const onClickButtonHandler = () => {
        addMessage(title);
    }

    return (
        <div className={'App'}>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'add'} callBack={onClickButtonHandler}/>

            {message.map((m, index) =>
                <div key={index}>{m.messageTitle}</div>)}
        </div>
    )

}

export default App;
