
const { deposit, getNumberOfLines, getBet, spin, transpose, getWinnings } = require('./main');
//global.prompt = jest.fn();

/*
describe('Sample Test', () => {
    it('should pass', () => {
      expect(true).toBe(true);
    });
  });
*/


describe('Deposit amount', () => {
    describe('Deposit', () => {
        it('should return a valid deposit amount', () => {
            const returnedDeposit = deposit();
            expect(typeof returnedDeposit).toBe('number');
        });
    });
});


describe('getNumberOfLines function', () => {
   // beforeEach(() => {
   //     global.prompt.mockClear();
   // });

    it('should return a valid number of lines (1, 2, or 3)', () => {
        const result = getNumberOfLines();
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(3);
    });

});


    describe('Get Bet', () => {
        it('should return a valid bet amount', () => {
            const depositAmounts = [50, 100, 200, 500, 1000];
            const numberOfLines = 1;
    
            depositAmounts.forEach(depositAmount => {
                const maxBetAmount = Math.floor(depositAmount / 3);
                const betAmount = getBet(depositAmount, numberOfLines);
                expect(betAmount).toBeGreaterThanOrEqual(1);
                // expect(betAmount).toBeLessThanOrEqual(maxBetAmount);
            });
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



