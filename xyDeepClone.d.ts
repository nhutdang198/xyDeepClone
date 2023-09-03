// xyDeepClone.d.ts

declare module 'xy-deep-clone' {
  /**
   * Deeply clones an object, including nested objects and arrays, creating a completely
   * independent copy of the original object.
   *
   * @param deepObject - The object to be cloned.
   * @returns A deep clone of the input object.
   */
  export function xyDeepClone<T>(deepObject: T): T;
}