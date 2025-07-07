import { sum } from "../sum"
import { expect, test } from 'vitest'

test ("adds two numbers",()=>{
    const res = sum(3,6)

    expect(res).toBe(9) 

})