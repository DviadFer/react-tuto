import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import counterStyles from './counter-styles'

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrementCount = () => {
        setCount(count + 1);
    };
    const onDecrementCount = () => {
        if (count != 0) {
            setCount(count - 1)
        }
    };
    const classes = counterStyles()

    return (
        <div className={classes.container}>
            <Button className={classes.button} onClick={onDecrementCount}>-</Button>
            <Typography className={classes.button}>{count}</Typography>
            <Button className={classes.button} onClick={onIncrementCount}>+</Button>
        </div>
    );
};
export default Counter;