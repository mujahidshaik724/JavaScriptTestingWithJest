const cloneArray=require('./cloneArray')

test('properly clone the array',()=>{
    const array=[1,2,3,4]
    expect(cloneArray(array)).toEqual(array)
})