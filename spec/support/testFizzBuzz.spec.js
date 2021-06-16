// const multipleofFizzBuzz = require("C:/Users/adela/OneDrive/Documents/GitHub/katanfizzbuzz/tddFizzBuzz.js")
const multipleofFizzBuzz = require("../../tddFizzBuzz.js")


describe ("testingFizzBuzz", function(){
    it("multiple of 3 and 5 should print FizzBuzz", function(){
        expect(multipleofFizzBuzz(15)).toEqual("FizzBuzz")
    })
    it("multiple of 3 should print Fizz", function(){
        expect(multipleofFizzBuzz(3)).toEqual("Fizz")
    })
    it("multiple of 5 should print Buzz", function(){
        expect(multipleofFizzBuzz(5)).toEqual("Buzz")
    })
    it("not a multiple of 3 or 5 should print number", function(){
        expect(multipleofFizzBuzz(2)).toEqual(2)
    })

})