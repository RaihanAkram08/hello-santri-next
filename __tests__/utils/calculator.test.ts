import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "../../utils/calculator";

describe('Calculator Functions', () => {
    // Test cases for add function 
    describe('add', () => {
        it('Should add two positive numbers correctly', () => {
            expect(add(2, 3)).toBe(5)
        })

        it('Should handle negative numbers', () => {
            expect(add(-2, 3)).toBe(1)
            expect(add(2, -3)).toBe(-1)
        })
    })

    // Test cases for subtract function 
    describe('subtarct', () => {
        it('Should subtract two numbers correctly', () => {
            expect(subtract(5, 3)).toBe(2)
        })

        it('Should handle negative results', () => {
            expect(subtract(2, 5)).toBe(-3)
        })
    })

    // Test case for multiply function
    describe('multiply', () => {
        it('Should multiply numbers correctly', () => {
            expect(multiply(2, 3)).toBe(6)
        })

        it('Should handle zero', () => {
            expect(multiply(5, 0)).toBe(0)
        })
    })

    // Test case for divide function 
    describe('divide', () => {
        it('Should divide two numbers correctly', () => {
            expect(divide(6, 2)).toBe(3)
        })

        it ('Should throw error when dividing by zero', () => {
            expect(() => divide(5, 0)).toThrow('Cannot divide by zero')
        })
    })
})