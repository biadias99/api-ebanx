import balances from '../mocks/balances.js';

export const getBalanceByAccountId = (accountId) => {
    return balances.find((balance) => balance.account_id === accountId);
};