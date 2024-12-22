import { forEach } from "../foreach";
const mockCallback = jest.fn(x => x + 42);
describe('Learning of mocking', () => { 
    it('testing mock ', () => {
        forEach([0, 1], mockCallback);
        expect(mockCallback.mock.calls).toHaveLength(2)
        expect(mockCallback.mock.calls[0][0]).toBe(0);
        expect(mockCallback.mock.calls[1][0]).toBe(1);
        expect(mockCallback.mock.results[1].value).toBe(43)
    });
})
 
//Mock Return Values
//Mock functions can also be used to inject test values into your code during a test
const myMock = jest.fn();
//injecting return value 10
myMock.mockReturnValueOnce(10).mockReturnValueOnce('X').mockReturnValueOnce(true);
console.log(myMock(),myMock(),myMock())