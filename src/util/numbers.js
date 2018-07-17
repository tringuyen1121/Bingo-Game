export const randomNumber = (factor) => {
    return Math.floor(Math.random() * factor + 1);
}

export const isNewNumber = (array, number) => {
    return array.indexOf(number) === -1;
}