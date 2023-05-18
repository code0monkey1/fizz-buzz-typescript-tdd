import { isPrimeNumber } from "../src/fizzBuzz";

    // Tests that the function returns true for input 2. 
    it("test_is_prime_number_returns_true_for_input_2", () => {
        expect(isPrimeNumber(2)).toBe(true);
    });

    // Tests that the function returns false for input 4. 
    it("test_is_prime_number_returns_false_for_input_4", () => {
        expect(isPrimeNumber(4)).toBe(false);
    });

    // Tests that the function returns false for input 1. 
    it("test_is_prime_number_returns_false_for_input_1", () => {
        expect(isPrimeNumber(1)).toBe(false);
    });

    // Tests that the function returns false for input 0. 
    it("test_is_prime_number_returns_false_for_input_0", () => {
        expect(isPrimeNumber(0)).toBe(false);
    });

    // Tests that the function returns false for negative inputs. 
    it("test_is_prime_number_returns_false_for_negative_inputs", () => {
        expect(isPrimeNumber(-5)).toBe(false);
    });

    // Tests that the function returns false for decimal inputs. 
    it("test_is_prime_number_returns_false_for_decimal_inputs", () => {
        expect(isPrimeNumber(3.5)).toBe(false);
    });