import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
// import { number, increment } from '../customHooks/IncrementDecrement'
import { useIncrementDecrement } from '../customHooks/useIncrementDecrement'

function IncrementDecrementBox() {

    const { number, increment, decrement } = useIncrementDecrement()
    console.log(increment)

    return (
        <Stack direction="row" sx={{ border: "1px solid lightgray", borderRadius: "54px", background: "white", padding: "0px 10px" }} alignItems="center">
            <Button sx={{ width: "20px", height: "20px", height: "20px", textAlign: "center", padding: "0px", minWidth: "20px", borderRadius: "54px", border: "1px solid lightgray" }} onClick={() => decrement(1)}>-</Button>
            <Typography sx={{ width: "20px", height: "20px", textAlign: "center", padding: "0px", minWidth: "30px" }}>{number}</Typography>
            <Button sx={{ width: "20px", height: "20px", height: "20px", textAlign: "center", padding: "0px", minWidth: "20px", borderRadius: "54px", border: "1px solid lightgray" }} onClick={() => increment(1)}>+</Button>
        </Stack>
    )
}

export default IncrementDecrementBox