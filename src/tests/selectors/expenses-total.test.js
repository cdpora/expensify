import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})

test('should total expenses to be 195', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toEqual(195);
});

test('should total expenses to be 114195', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toEqual(114195);
});