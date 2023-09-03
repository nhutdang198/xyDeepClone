"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyDeepClone = void 0;
/**
 * Deeply clones an object, including nested objects and arrays, creating a completely
 * independent copy of the original object.
 *
 * @param deepObject - The object to be cloned.
 * @returns A deep clone of the input object.
 */
function xyDeepClone(deepObject) {
    if (deepObject === null || typeof deepObject !== 'object') {
        return deepObject;
    }
    if (deepObject instanceof Date) {
        return new Date(deepObject);
    }
    if (Array.isArray(deepObject)) {
        var newArray = [];
        for (var i = 0; i < deepObject.length; i++) {
            newArray[i] = xyDeepClone(deepObject[i]);
        }
        return newArray;
    }
    var newObject = {};
    for (var key in deepObject) {
        if (Object.prototype.hasOwnProperty.call(deepObject, key)) {
            newObject[key] = xyDeepClone(deepObject[key]);
        }
    }
    return newObject;
}
exports.xyDeepClone = xyDeepClone;
