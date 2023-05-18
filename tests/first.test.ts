import fizzBuzz from "../src/fizzBuzz";

describe('fizz buzz', () => {
     
    describe('should return `Wizz` when number is prime', () => {
      test.each([
        {input:2},
        {input:7},
        {input:11},
        ])('for prime number $input', ({input}) => {
          // Arrange
          const sut = fizzBuzz;

          // Act
          const received = sut(input);
          const expected="Wizz"

          // Assert
          expect(received).toEqual(expected);
      });
    })


    describe('should return `FizzWizz` when number is prime and 3', () => {
      test.each([
        {input:3},
        
        ])('for prime number $input', ({input}) => {
          // Arrange
          const sut = fizzBuzz;

          // Act
          const received = sut(input);
          const expected="FizzWizz"

          // Assert
          expect(received).toEqual(expected);
      });
    })

       describe('should return `BuzzWizz` when number is prime and 5', () => {
      test.each([
        {input:5},
        
        ])('for prime number $input', ({input}) => {
          // Arrange
          const sut = fizzBuzz;

          // Act
          const received = sut(input);
          const expected="BuzzWizz"

          // Assert
          expect(received).toEqual(expected);
      });
    })

    describe('should print Fizz when num in multiple of 3', () => {

      test.each([
            {input: 9, expected: "Fizz"},
            {input: 27, expected: "Fizz"}
          ])(`For input $input Expected output $expected`, ({input, expected}) => {
            // Arrange
            const sut=fizzBuzz
            // Act
            const result = sut(input);

            // Assert
            expect(result).toBe(expected);                
          });
  })

  describe('should print Buzz when num in multiple of 5', () => { 
    
    test.each([
  
      {input: 10, expected: "Buzz"},
      {input: 20, expected: "Buzz"},
       {input :25,expected :"Buzz"}
    ])(`For input $input Expected output $expected`, ({input, expected}) => {
      // Arrange
      const sut = fizzBuzz;

      // Act
      const result = sut(input); 

      // Assert
      expect(result).toBe(expected);
    });
  });

    describe('should print FizzBuzz when num in multiple of both 3 and 5', () => {
      test.each([
        {input: 15, expected: "FizzBuzz"},
        {input: 30, expected: "FizzBuzz"},
        {input: 45, expected: "FizzBuzz"}
      ])(`For input $input Expected output $expected`, ({input, expected}) => {
        // Arrange
        const sut = fizzBuzz;

        // Act
        const result = sut(input);

        // Assert
        expect(result).toBe(expected);
      });
  });

    describe('should return input Number when num is not multiple of 3 or 5', () => {
    test.each([
      
      {input: 1},
      {input: 4}, 
      {input: 8},


    ])(`For input $input Expected output $input`, ({input}) => {
      // Arrange
      const sut = fizzBuzz;

      // Act
      const result = sut(input);

      // Assert
      expect(result).toBe(input);
    });
  });



})