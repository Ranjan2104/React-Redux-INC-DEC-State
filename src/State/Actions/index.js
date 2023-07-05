export const incBalance = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const desBalance = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}

export const resetBalance = (num) => {
    return {
        type: 'RESET',
        payload: num
    }
}