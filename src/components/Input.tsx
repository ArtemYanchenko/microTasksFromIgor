import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string,
    setTitle: (title: string) => void
}

const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value);
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default Input;