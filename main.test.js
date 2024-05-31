
const { deposit, getNumberOfLines, getBet, spin, transpose, getWinnings } = require('./main');


/*
describe('Sample Test', () => {
    it('should pass', () => {
      expect(true).toBe(true);
    });
  });
*/


describe('Slot Machine Game', () => {
    describe('Deposit', () => {
        it('should return a valid deposit amount', () => {
            expect(deposit()).toBe(100);
        });
    });

    describe('Get Bet', () => {
        it('should return a valid bet amount', () => {
            expect(getBet(100, 1)).toBe(10);
        });
    });

    describe('Spin', () => {
        it('should return an array of reels with correct dimensions', () => {
            const reels = spin();
            expect(reels.length).toBe(3); 
            expect(reels[0].length).toBe(3); 
        });
    });

    describe('Transpose', () => {
        it('should transpose the given reels correctly', () => {
            const reels = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];
            const transposedRows = transpose(reels);
            expect(transposedRows.length).toBe(3); 
            expect(transposedRows[0].length).toBe(3); 
            expect(transposedRows[0]).toEqual(['A', 'D', 'G']); 
        });
    });

    describe('Get Winnings', () => {
        it('should calculate winnings correctly for a winning line', () => {
            const rows = [['A', 'A', 'A'], ['B', 'B', 'B'], ['C', 'D', 'C']]; 
            expect(getWinnings(rows, 10, 1)).toBe(50); 
        });

        it('should return 0 winnings for a non-winning line', () => {
            const rows = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']]; 
            expect(getWinnings(rows, 10, 1)).toBe(0);
        });
    });
});


