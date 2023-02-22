import React, { useState } from 'react'

export const useIncrementDecrement = () => {
    const [number, setNumber] = useState(0)
    const increment = (e) => {
        setNumber(number + e)
    }

    const decrement = (e) => {
        setNumber(number - e)
    }

    return { number, increment, decrement }
}
