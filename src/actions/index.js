import { randomNumber, isNewNumber } from '../util/numbers';

export const DRAW_NUMBER = 'draw number';
export const CREATE_CARD = 'create card';

export const drawNumber = (numberArray) => {

    return (dispatch) => {
        let curNumber = randomNumber(75);

        while (!isNewNumber(numberArray, curNumber)) {
            curNumber = randomNumber(75);
        }

        dispatch({
            type: DRAW_NUMBER,
            payload: [...numberArray, curNumber]
        })
    }
}

export const createNumberTable = () => {
    return (dispatch) => {

        const table = [];
        const usedNumber = [];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {

                // if (i === j && i === 2) {
                //     table.push('Free Space');
                //     continue;
                // }

                let curNum = randomNumber(15) + j * 15;
                while (!isNewNumber(usedNumber, curNum)) {
                    curNum = randomNumber(15) + j * 15;
                }

                usedNumber.push(curNum);
                table.push(curNum);
            }
        }

        console.log(table);
        dispatch({
            type: CREATE_CARD,
            payload: table
        })
    }
}
