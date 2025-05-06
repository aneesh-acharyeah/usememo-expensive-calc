# 🧠 useMemo Example – Expensive Calculation Optimizer

This React project demonstrates how to use the `useMemo` hook to optimize performance by **memoizing the result of an expensive calculation**. The app includes a number input and a theme toggle (light/dark mode). Without `useMemo`, unnecessary re-renders would re-run the slow function on every update.

---

## 🔍 About `useMemo`

React's `useMemo` is used to **memoize** (or cache) the result of a function so that it is **only recalculated when its dependencies change**. This is especially useful for expensive calculations or operations that would otherwise slow down performance on re-renders.

### 🧠 Why use `useMemo` here?

- We simulate a slow calculation using a `for` loop.
- When toggling the theme, we **don’t want to re-run the slow calculation**.
- `useMemo` ensures the expensive calculation only runs **when the number input changes**.

---

## 🚀 Features

- 📥 User enters a number, and the app calculates a result (simulated slow calculation)
- 🌗 Toggle between light and dark themes
- ⚡ Fast theme switching with no recalculation (thanks to `useMemo`)
- ✅ Clear and minimal UI

---

## 🧪 How It Works

1. You enter a number → the app runs a slow doubling function.
2. The result is **cached using `useMemo`**.
3. Toggling the theme doesn't re-trigger the calculation.
4. The function is only re-run when the number input changes.

---

## 🛠 Tech Stack

- React (with Hooks)
- JavaScript (ES6+)
- CSS

---

## 🧩 Code Sample

```jsx
const doubleNumber = useMemo(() => slowFunction(number), [number]);
