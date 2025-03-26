const subtract=require('./subtract')

test('this is subtracted well and good', ()=>{
    expect(subtract(1,2)).toBe(-1)
})