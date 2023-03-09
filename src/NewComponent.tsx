import React from 'react';
import {BanknoteType, MoneyType} from './App';

export type CurrentMoneyType = {
    currentMoney: MoneyType[],
    onClickFilterHandler: (nameButton: BanknoteType) => void,
}

export const NewComponent = (props: CurrentMoneyType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((m,index) => <li key={index}>{m.nominal} - {m.banknote} - {m.number}</li>
                )}
            </ul>
            <div>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>
    );
};