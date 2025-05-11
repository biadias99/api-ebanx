import events from '../mocks/events.js';
import operations from '../mocks/operations.js';
import { createBalance, getBalanceById, updateBalance } from './balanceService.js';

export const getEvents = () => {
    return events;
};

export const createEvent = (type, origin, destination, amount) => {
    const event = {
        id: events.length + 1,
        operation_id: operations.find((operation) => operation.name === type).id,
        date_created: new Date().toISOString(),
        origin,
        destination,
        amount,
    };

    events.push(event);
}

export const deposit = ({ type, destination, amount }) => {
    let balance = getBalanceById(destination);
    balance = balance ? updateBalance(destination, amount) : createBalance(destination, amount);

    createEvent(type, null, balance.id, amount);

    return {
        destination: {
            id: balance.id,
            balance: balance.amount,
        }
    }
};

export const withdraw = ({ type, origin, amount }) => {
    let balance = getBalanceById(origin);

    if (!balance) return 0;

    balance = updateBalance(origin, -amount);

    createEvent(type, balance.id, null, amount);

    return {
        origin: {
            id: balance.id,
            balance: balance.amount,
        }
    }
};

export const transfer = ({ type, origin, destination, amount }) => {
    let originBalance = getBalanceById(origin);
    let destinationBalance = getBalanceById(destination);

    if (!originBalance)
        return 0;
    else   
        originBalance = updateBalance(origin, -amount);

    destinationBalance = destinationBalance
        ? updateBalance(destination, amount)
        : createBalance(destination, amount);

    createEvent(type, originBalance.id, destinationBalance.id, amount);

    return {
        origin: {
            id: originBalance.id,
            balance: originBalance.amount,
        },
        destination: {
            id: destinationBalance.id,
            balance: destinationBalance.amount,
        }
    }
};

export const resetEvents = () => {
    events.length = 0;
}
