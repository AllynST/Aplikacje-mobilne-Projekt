import Game, { LetterBox, addRecord, fetchWordList } from '../../GameLogic/Game';

describe('Game', () => {
    let game;

    beforeEach(() => {
        game = new Game('testword', 'TOMEK');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('constructor', () => {
        it('should initialize game properties correctly', () => {
            expect(game.CorrectWord).toBe('testword');
            expect(game.nickName).toBe('TOMEK');
            expect(game.currentRow).toBe(0);
            expect(game.currentLetter).toBe(0);
            expect(game.checkRowCount).toBe(0);
            expect(game.Board.length).toBe(6);
            expect(game.Board[0].length).toBe(5);
            expect(game.isPopupVisible).toBe(false);
        });

        it('should hide the popup window', () => {
            expect(game.isPopupVisible).toBe(false);
        });

        it('should return the current board JSX', () => {
            const boardJSX = game.returnCurrentBoardJSX();
        });
    });

   
});
