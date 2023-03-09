import React from 'react';

type ButtonNameProps = {
    name:string
    callBack:()=>void
}

const Button = (props:ButtonNameProps) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;