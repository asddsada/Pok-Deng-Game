const score = require('../lib/score');

describe("Score function", () => {
    test("should return null", () => {
        expect(score([])).toBe(null);
        expect(score(['Spreads-9', ])).toBe(null);
        expect(score(['Spreads-9', 'Spreads-8'])).toBe(null);
        expect(score(['Spreads-9', 'Spreads-8', 'Spreads-7'])).toBe(null);
    });

    test("should return win", () => {
        expect(score([
            'Spreads-9', 'Spreads-8',
            'Spreads-7', 'Spreads-6'
        ])).toBe('win');
    })

    test("should return tie", () => {
        expect(score([
            'Spreads-10', 'Spreads-Jack',
            'Spreads-Queen', 'Spreads-King'
        ])).toBe('tie');
    })

    test("should return loss", () => {
        expect(score([
            'Spreads-Ace', 'Spreads-2',
            'Spreads-3', 'Spreads-4'
        ])).toBe('loss');
    });
});