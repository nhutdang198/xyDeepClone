// Import the xyDeepClone function
import { xyDeepClone } from './xyDeepClone.ts';

describe('xyDeepClone', () => {
  it('should clone a simple object', () => {
    const originalObject = {
      name: 'John',
      age: 30,
    };
    const clonedObject = xyDeepClone(originalObject);
    expect(clonedObject).toEqual(originalObject);
    expect(clonedObject).not.toBe(originalObject); // Ensure it's a deep clone
  });

  it('should clone a deep object', () => {
    const originalObject = {
      person: {
        name: 'Alice',
        address: {
          city: 'Wonderland',
          postal: '12345',
        },
      },
    };
    const clonedObject = xyDeepClone(originalObject);
    expect(clonedObject).toEqual(originalObject);
    expect(clonedObject).not.toBe(originalObject); // Ensure it's a deep clone
  });

  it('should clone an object with nested properties', () => {
    const originalObject = {
      name: 'John',
      address: {
        city: 'Exampleville',
      },
    };
    const clonedObject = xyDeepClone(originalObject);
    expect(clonedObject).toEqual(originalObject);
    expect(clonedObject).not.toBe(originalObject); // Ensure it's a deep clone
  });

  it('should clone an array', () => {
    const originalArray = [1, 2, 3];
    const clonedArray = xyDeepClone(originalArray);
    expect(clonedArray).toEqual(originalArray);
    expect(clonedArray).not.toBe(originalArray); // Ensure it's a deep clone
  });

  it('should clone an array with nested objects', () => {
    const originalArray = [{ name: 'John' }, { name: 'Jane' }];
    const clonedArray = xyDeepClone(originalArray);
    expect(clonedArray).toEqual(originalArray);
    expect(clonedArray).not.toBe(originalArray); // Ensure it's a deep clone
  });

  it('should handle Date objects', () => {
    const originalDate = new Date('2023-01-01');
    const clonedDate = xyDeepClone(originalDate);
    expect(clonedDate).toEqual(originalDate);
    expect(clonedDate).not.toBe(originalDate); // Ensure it's a deep clone
  });

  it('should return null as is', () => {
    const originalNull = null;
    const clonedNull = xyDeepClone(originalNull);
    expect(clonedNull).toBeNull();
  });

  it('should return non-objects as is', () => {
    const originalNumber = 42;
    const clonedNumber = xyDeepClone(originalNumber);
    expect(clonedNumber).toEqual(originalNumber);

    const originalString = 'Hello, World!';
    const clonedString = xyDeepClone(originalString);
    expect(clonedString).toEqual(originalString);
  });

  const depth = 1000; // Adjust this value as needed

  // Generate a deeply nested object for testing
  function generateDeepObject(depth: number): any {
    if (depth <= 0) {
      return null;
    }
    return {
      value: depth,
      child: generateDeepObject(depth - 1),
    };
  }

  const deepObject = generateDeepObject(depth);

  it(`should execute in a reasonable time for a deep object with depth ${depth}`, () => {
    // Measure the start time
    const startTime = performance.now();

    // Perform the deep clone operation
    xyDeepClone(deepObject);

    // Measure the end time
    const endTime = performance.now();

    // Calculate the total execution time
    const executionTime = endTime - startTime;

    // Adjust this threshold based on your performance expectations
    const performanceThreshold = 1000; // milliseconds

    // Assert that the execution time is within the acceptable threshold
    expect(executionTime).toBeLessThan(performanceThreshold);
  });
});
