# JavaScript Comprehensive Notes

This document provides a detailed summary of the JavaScript concepts covered in the project folder, excluding the `01_Color_change` and `08_EVENTS` directories.

---

## 📂 01_BASICS

### [01_variables.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/01_variables.js)
- **Variable Declaration**: Covers `const`, `let`, and `var`.
- **Key Takeaways**:
    - `const`: Used for constants; values cannot be reassigned.
    - `let`: Used for block-scoped variables.
    - `var`: Avoid using `var` due to issues with block and functional scope.
- **Tools**: Demonstrates `console.table()` to display multiple variables in a table format.

### [02_datatypes.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/02_datatypes.js)
- **`"use strict"`**: Treats all JS code as the newer version.
- **Primitive Datatypes**:
    - `Number`: Range up to 2^53.
    - `BigInt`: For very large integers.
    - `String`: Textual data.
    - `Boolean`: `true`/`false`.
    - `null`: Standalone value representing "empty".
    - `undefined`: Value not yet assigned.
    - `Symbol`: Unique identifier.
- **Type Checking**: Uses `typeof` operator. Note: `typeof null` is `"object"`, while `typeof undefined` is `"undefined"`.

### [03_conversionOperation.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/03_conversionOperation.js)
- **Type Conversion**: Demonstrates converting values to `Number`, `Boolean`, and `String`.
- **Conversion Results**:
    - `"12"` → `12`, `"12abc"` → `NaN`, `null` → `0`, `undefined` → `NaN`.
    - Boolean: `1` → `true`, `0` → `false`, `""` → `false`, `"abc"` → `true`.

### [04_comparison.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/04_comparison.js)
- **Operators**: `>`, `<`, `>=`, `<=`, `==`, `!=`.
- **Strict Equality (`===`)**: Checks both value and datatype.
- **Edge Cases**: Comparison of `null` and `undefined` (e.g., `null >= 0` is `true` because `null` is converted to `0` in comparisons).

### [05_String.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/05_String.js)
- **String Interpolation**: Using backticks (`` ` ``) and `${}`.
- **String Methods**: `length`, `toUpperCase()`, `charAt()`, `indexOf()`, `substring()`, `slice()`, `trim()`, `replace()`, `includes()`, and `split()`.

### [06num_and_math.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/06num_and_math.js)
- **Number Methods**: `toFixed()`, `toPrecision()`, `toLocaleString('en-In')`.
- **Math Object**:
    - `Math.abs()`: Absolute value.
    - `Math.round()`, `Math.ceil()`, `Math.floor()`: Rounding methods.
    - `Math.min()`, `Math.max()`: Finding extremes.
    - `Math.random()`: Generating random numbers (including a formula for range-based randoms).

### [07_Datesinjs.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/07_Datesinjs.js)
- **Date Object**: Creating and formatting dates (`toString`, `toDateString`, `toLocaleString`).
- **Timestamps**: `Date.now()` and converting to seconds.
- **Custom Formatting**: Using `toLocaleString` with options for specific weekday formats.

### [3.1operations.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/3.1operations.js)
- **Arithmetic Operations**: `+`, `-`, `*`, `**` (power), `/`, `%` (remainder).
- **String Concatenation**: Behavior of `+` with numbers and strings (e.g., `"1" + 2 + 2` → `"122"` vs `1 + 2 + "2"` → `"32"`).
- **Increment Operators**: Prefix (`++x`) and Postfix (`x++`).

### [datatypes-summary.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/01_BASICS/datatypes-summary.js)
- **Memory Management**:
    - **Stack Memory**: Used for Primitive types (Copy by value).
    - **Heap Memory**: Used for Non-Primitive/Reference types (Copy by reference).
- **Data Categories**: Summarizes Primitives vs. Reference types (Array, Object, Function).

---

## 📂 02_BASICS

### [01_array.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/02_BASICS/01_array.js)
- **Definition**: Collection of multiple items in a single variable.
- **Methods**: `push`, `pop`, `unshift`, `shift`, `includes`, `indexOf`, `join`.
- **Slice vs Splice**:
    - `slice(1, 3)`: Returns a section without modifying the original array.
    - `splice(1, 3)`: Removes elements from the original array.

### [02_array.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/02_BASICS/02_array.js)
- **Merging**: `concat()` vs. **Spread Operator** (`[...]`).
- **Flatting**: `flat(Infinity)` to flatten nested arrays.
- **Utility Methods**: `Array.isArray()`, `Array.from()` (converts strings/objects to arrays), `Array.of()`.

### [03_Objects.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/02_BASICS/03_Objects.js)
- **Declaration**: Object Literals and Constructors.
- **Symbols**: Correct way to use a Symbol as an object key using `[]`.
- **Accessing/Modifying**: Dot notation vs. bracket notation.
- **`Object.freeze()`**: Prevents modification of object properties.
- **Methods**: Adding functions to objects and using `this` to refer to the current object.

### [04_objects.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/02_BASICS/04_objects.js)
- **Nesting**: Accessing properties in deeply nested objects.
- **Merging**: `Object.assign({}, obj1, obj2)` vs. **Spread Operator** (`{...obj1, ...obj2}`).
- **Data Retrieval**: `Object.keys()`, `Object.values()`, `Object.entries()`, and `hasOwnProperty()`.
- **Destructuring**: Extracting properties with custom names (e.g., `const {courseInstructor: instructor} = course`).

---

## 📂 03_BASICS

### [01_functions.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/03_BASICS/01_functions.js)
- **Basics**: Function definition, reference vs. execution.
- **Parameters**: Handling missing arguments (returns `undefined`).
- **Rest Operator (`...`)**: Handling multiple arguments as an array (e.g., `calculateCartPrice(...num1)`).
- **Passing Objects/Arrays**: Demonstrates how to pass complex data structures into functions.

### [02_scops.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/03_BASICS/02_scops.js)
- **Global vs Block Scope**: Difference between `let`/`const` inside and outside blocks.
- **Nested Scope**: Child functions can access parent variables (Closure basics).
- **Hoisting**: Difference between direct function declarations (callable before declaration) and function expressions (not callable before declaration).

### [03_arrowfun.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/03_BASICS/03_arrowfun.js)
- **`this` Keyword**: Refers to current context. In global scope of a browser, it's the `window` object.
- **Arrow Functions**: Syntax differences. 
    - Explicit Return: `() => { return x }`
    - Implicit Return: `() => (x)` or `() => x`
    - Note: `this` behavior is different in arrow functions compared to regular functions.

### [04_IIFE.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/03_BASICS/04_IIFE.js)
- **Immediately Invoked Function Expressions**: Syntax `()()` used to avoid polluting the global scope.
- **Named vs Simple IIFE**: Demonstrates both regular and arrow function IIFEs.

### [note.txt](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/03_BASICS/note.txt)
- **Execution Context**:
    - Global Execution Context (GEC) is created first.
    - JS is **Single-threaded**.
- **Execution Phases**:
    1. **Memory Creation Phase**: Allocation of memory for variables and functions.
    2. **Execution Phase**: Performance of actual operations.

---

## 📂 04_CONTROL_FLOW

### [one.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/04_CONTROL_FLOW/one.js)
- **If/Else**: Conditional execution based on Boolean logic.
- **Logical Operators**: `&&` (AND), `||` (OR).
- **Scope**: Variables declared with `let`/`const` inside `if` blocks are not accessible outside.

### [switch.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/04_CONTROL_FLOW/switch.js)
- **Syntax**: `switch (key) { case value: ... break; default: ... }`.
- **Behavior**: If `break` is omitted, subsequent cases are executed until a break or end is reached.

### [truthy.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/04_CONTROL_FLOW/truthy.js)
- **Falsy Values**: `false`, `0`, `-0`, `BigInt 0n`, `""`, `null`, `NaN`, `undefined`.
- **Truthy Values**: `"0"`, `'false'`, `" "`, `[]`, `{}`, `function(){}`.
- **Nullish Coalescing Operator (`??`)**: Used to provide fallback values for `null` or `undefined`.
- **Ternary Operator**: `condition ? trueValue : falseValue`.

---

## 📂 05_ITRATIONS

### [one.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/05_ITRATIONS/one.js)
- **For Loop**: Standard iteration loop.
- **Control Keywords**:
    - `break`: Exits the loop immediately.
    - `continue`: Skips the current iteration and moves to the next.

### [two.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/05_ITRATIONS/two.js)
- **While Loop**: Iterates as long as condition is true.
- **Do-While Loop**: Executes at least once before checking the condition.

### [three.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/05_ITRATIONS/three.js)
- **For-Of Loop**: Iterates over iterable objects like Arrays and Strings.
- **Maps**: Key-value pair collection. Demonstrates iteration over maps using `[key, value]` destructuring.

### [four.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/05_ITRATIONS/four.js)
- **For-In Loop**: Used primarily for iterating over **Objects** (keys). Also works on arrays (indices).

### [five.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/05_ITRATIONS/five.js)
- **ForEach**: Iterates over arrays. Takes a callback function.
- **Parameters**: Can access `item`, `index`, and the whole `array`.
- **Object Iteration**: Useful for iterating over an array of objects.

### [six.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/05_ITRATIONS/six.js)
- **Filter**: Returns a new array containing elements that pass the condition.
- **Note**: `forEach` does not return values, whereas `filter` does.

### [seven.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/05_ITRATIONS/seven.js)
- **Map**: Returns a new array with modified values.
- **Chaining**: Demonstrates using multiple methods together (e.g., `.map().map().filter()`).

### [eight.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/05_ITRATIONS/eight.js)
- **Reduce**: Reduces an array to a single value.
- **Accumulator**: Uses an `acc` (accumulator) and `currval` (current value). Often used for calculating totals in shopping carts.

---

## 📂 06_DOM

### [one.html](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/06_DOM/one.html)
- **Basic Structure**: Setting up an HTML file for DOM learning.

### [two.html](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/06_DOM/two.html)
- **Traversal**: 
    - Parent to Child: `parent.children`, `firstElementChild`, `lastElementChild`.
    - Child to Parent: `parentElement`, `nextElementSibling`.
- **NodeList**: Understanding `childNodes` (which includes text nodes/line breaks).

### [three.html](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/06_DOM/three.html)
- **Creation**: `document.createElement('div')`.
- **Attributes**: `div.className`, `div.id`, `div.setAttribute()`.
- **Styling**: `div.style.backgroundColor`, `padding`.
- **Content**: `document.createTextNode()` and `appendChild()`.

### [four.html](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/06_DOM/four.html)
- **Optimization**: `document.createTextNode` is more optimized than `innerHTML` for adding text nodes.
- **Edit/Remove**: 
    - `replaceWith()`: Replacing an existing element.
    - `outerHTML`: Modifying the element itself.
    - `remove()`: Deleting an element from the DOM.

---

## 📂 Practice

### [practise.js](file:///c:/Users/bhave/OneDrive/Desktop/JAVASCRIPT/practise.js)
- **Mathematical Logic**:
    - Multiplication table generator.
    - Sum of natural numbers.
    - Variable swapping logic (using temp variable and destructuring `[a, b] = [b, a]`).
