import {shallow,mount} from "jest";
import {Home} from '.src/Components/pages/Home';

describe("Home",()=>{
    test("render",()=>{
        const wrapper=mount(<Home/>)
        expect(wrapper).toBe(true)
    })
})