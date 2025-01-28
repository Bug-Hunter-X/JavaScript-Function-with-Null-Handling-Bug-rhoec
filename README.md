# JavaScript Function with Null and Undefined Handling

This repository demonstrates a common error in JavaScript functions: improperly handling null, undefined, and NaN values.  The original code only checks for null, leading to unexpected results with undefined or NaN inputs.

## Bug Description

The `foo` function is intended to add two numbers. However, it only explicitly handles null values. If either `a` or `b` is `undefined` or `NaN`, the function will throw an error or produce unexpected output.

## Solution

The solution provided enhances the function to robustly handle null, undefined, and NaN inputs by using type checking and coercion.