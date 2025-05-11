import balances from '../mocks/balances.js';

export const getBalanceById = (id) => {
    return balances.find((balance) => +balance.id === +id);
};

export const createBalance = (destination, amount) => {
    const balance = {
        id: destination,
        name: `Account ${balances.length + 1}`,
        amount: amount,
    }
    balances.push(balance);
    return balance;
};

export const updateBalance = (destination, amount) => {
    let balance = getBalanceById(destination);
    balance.amount += amount;
    return balance;
};

export const resetBalances = () => {
    balances.length = 0;
}