import { sum } from "../src/sum";
//
describe('Mock test to test jest configurations', () => {
    it('Testing the sum of 1+2', () =>{
        const res = sum(1, 2);
        //
        expect(res).toEqual(3);
    });
});