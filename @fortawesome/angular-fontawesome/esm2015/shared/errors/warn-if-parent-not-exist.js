/**
 * Warns if parent component not existing.
 */
export const faWarnIfParentNotExist = (parent, parentName, childName) => {
    if (!parent) {
        throw new Error(`${childName} should be used as child of ${parentName} only.`);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi1pZi1wYXJlbnQtbm90LWV4aXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvIiwic291cmNlcyI6WyJzaGFyZWQvZXJyb3JzL3dhcm4taWYtcGFyZW50LW5vdC1leGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLENBQUMsTUFBVyxFQUFFLFVBQWtCLEVBQUUsU0FBaUIsRUFBRSxFQUFFO0lBQzNGLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsU0FBUywrQkFBK0IsVUFBVSxRQUFRLENBQUMsQ0FBQztLQUNoRjtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybnMgaWYgcGFyZW50IGNvbXBvbmVudCBub3QgZXhpc3RpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBmYVdhcm5JZlBhcmVudE5vdEV4aXN0ID0gKHBhcmVudDogYW55LCBwYXJlbnROYW1lOiBzdHJpbmcsIGNoaWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghcGFyZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke2NoaWxkTmFtZX0gc2hvdWxkIGJlIHVzZWQgYXMgY2hpbGQgb2YgJHtwYXJlbnROYW1lfSBvbmx5LmApO1xuICB9XG59O1xuIl19