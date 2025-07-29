
# 🧮 String Calculator - TDD Assignment

This project is a solution to the classic **String Calculator TDD Kata**, implemented in **JavaScript** using **Jest** for unit testing.

The purpose of this assignment is to demonstrate **Test-Driven Development (TDD)** in practice — by incrementally building a string-based calculator with evolving test coverage.

---

## ✅ Features Implemented

- ✅ Returns `0` for an empty string
- ✅ Returns the number itself for a single numeric input
- ✅ Sums multiple comma-separated numbers: `"1,2,3"` → `6`
- ✅ Supports newline (`\n`) as a valid delimiter: `"1\n2,3"` → `6`
- ✅ Allows custom delimiters using the format: `//[delimiter]\n[numbers]`
  - Example: `"//;\n1;2"` → `3`
  - Example: `"//|\n4|5|6"` → `15`
- ✅ Throws an error when negative numbers are present
  - Example: `"1,-2"` → `Error: negative numbers not allowed: -2`

---

## 📁 Project Structure

```

string-calculator-tdd/
│
├── src/
│   └── calculator.js         # add() function implementation
│
├── tests/
│   └── calculator.test.js    # All Jest-based test cases
│
├── package.json
└── README.md                 # You are here

````

---

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/string-calculator-tdd.git
cd string-calculator-tdd
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run all test cases

```bash
npm test
```

You should see 100% test pass rate if everything is correct.

---

## 🧪 Sample Usage

Here’s how the `add()` function behaves with different inputs:

```js
add("")              // 0
add("7")             // 7
add("1,2,3")         // 6
add("1\n2,3")        // 6
add("//;\n1;2")      // 3
add("//|\n4|5|6")    // 15
add("1,-2")          // ❌ throws: negative numbers not allowed: -2
```

---

## 💡 TDD Commit Style (Step-by-Step)

Each feature was implemented by writing a failing test first, followed by the minimum code to make it pass, and finally refactoring:

```
✅ Handle empty string input
✅ Support single number input
✅ Handle multiple comma-separated numbers
✅ Support newline as delimiter
✅ Support custom delimiters (//[delimiter]\n)
✅ Throw error on negative numbers
```

---

## 👨‍💻 Tech Stack

* Language: JavaScript
* Testing: [Jest](https://jestjs.io/)
* Methodology: Test-Driven Development (TDD)

---

## 👤 Author

**Suchit Kapale**
🔗 [GitHub](https://github.com/kalilinux429)
💬 Passionate about clean code, UI development, and full-stack apps!

---

## 📃 License

This project is licensed under the [MIT License](LICENSE)



