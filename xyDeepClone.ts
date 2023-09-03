/**
 * Deeply clones an object, including nested objects and arrays, creating a completely
 * independent copy of the original object.
 *
 * @param deepObject - The object to be cloned.
 * @returns A deep clone of the input object.
 */
export function xyDeepClone<T>(deepObject: T): T {
  if (deepObject === null || typeof deepObject !== 'object') {
    return deepObject;
  }

  if (deepObject instanceof Date) {
    return new Date(deepObject) as any;
  }

  if (Array.isArray(deepObject)) {
    const newArray: any[] = [];
    for (let i = 0; i < deepObject.length; i++) {
      newArray[i] = xyDeepClone(deepObject[i]);
    }
    return newArray as any;
  }

  const newObject: Record<string, any> = {};
  for (const key in deepObject) {
    if (Object.prototype.hasOwnProperty.call(deepObject, key)) {
      newObject[key] = xyDeepClone(deepObject[key]);
    }
  }
  return newObject as any;
}
