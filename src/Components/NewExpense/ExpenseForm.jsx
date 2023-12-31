import React, {useState} from "react";

import './ExpenseForm.css';

export default function ExpenseForm(){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const titleChangeHandler = (e) => {
    //     setEnteredTitle(e.target.value);
    // };
    // const amountChangeHandler = (e) => {
    //     setEnteredAmount(e.target.value);
    // }
    // const dateChangeHandler = (e) => {
    //     setEnteredDate(e.target.value);
    // }
    // Aqui foi feita a função InputChangeHandler para substituir as 3 acima e ter um código mais limpo.

    const inputChangeHanlder = (identifier, value) => {
        if(identifier === 'title'){
            setEnteredTitle(value)
        } else if (identifier === 'date'){
            setEnteredDate(value)
        } else {
            setEnteredAmount(value)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        console.log(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={(event) => {inputChangeHanlder('title', event.target.value)}} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={(event) => {inputChangeHanlder('amount', event.target.value)}}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2024-12-31" value={enteredDate} onChange={(event) => {inputChangeHanlder('date', event.target.value)}}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}