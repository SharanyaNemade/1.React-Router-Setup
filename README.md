**Custom Hooks in React** are a way to **reuse logic** between different components.

Think of them like a **helper function**, but specially made for React.

### Why do we need Custom Hooks?

Imagine you have two components that both need to:

* Fetch data from an API
* Track window size
* Handle form input

Instead of writing the same code in every component, you write it **once** in a custom hook and use it wherever you need it.

---

## Simple Example

### Without Custom Hook

```jsx
function User() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

function Product() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Here, the same counting logic is repeated.

---

## With Custom Hook

Create a file called:

```javascript
useCounter.js
```

```jsx
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return { count, increment };
}

export default useCounter;
```

Now use it anywhere.

### User Component

```jsx
import useCounter from "./useCounter";

function User() {
  const { count, increment } = useCounter();

  return (
    <button onClick={increment}>
      User Count: {count}
    </button>
  );
}
```

### Product Component

```jsx
import useCounter from "./useCounter";

function Product() {
  const { count, increment } = useCounter();

  return (
    <button onClick={increment}>
      Product Count: {count}
    </button>
  );
}
```

Now both components share the same logic without duplicating code.

---

## Real-Life Example

Suppose many pages need user data.

Instead of writing this everywhere:

```jsx
const [user, setUser] = useState(null);

useEffect(() => {
  fetch("/api/user")
    .then(res => res.json())
    .then(data => setUser(data));
}, []);
```

Create a custom hook:

```jsx
import { useState, useEffect } from "react";

function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return user;
}
```

Use it like this:

```jsx
function Profile() {
  const user = useUser();

  return <h1>{user?.name}</h1>;
}
```

Another component:

```jsx
function Dashboard() {
  const user = useUser();

  return <p>Welcome {user?.name}</p>;
}
```

---

## Rules for Custom Hooks

* ✅ The function name **must start with `use`**.

  ```jsx
  useCounter()
  useUser()
  useTheme()
  ```
* ✅ You can use other React hooks (`useState`, `useEffect`, `useContext`, etc.) inside a custom hook.
* ✅ Call custom hooks only at the top level of a React component or another custom hook, not inside loops, conditions, or nested functions.

---

## Easy Analogy

Imagine you're making tea every day.

Instead of repeating these steps:

1. Boil water
2. Add tea leaves
3. Add sugar
4. Pour into a cup

You create a machine called **TeaMaker()**.

Now whenever you want tea, you simply call:

```text
TeaMaker()
```

A **custom hook works the same way**:

* The repeated React logic is placed in one function.
* Whenever you need it, you call the hook.

---

## In One Sentence

**A custom hook is a reusable JavaScript function (whose name starts with `use`) that lets you share React stateful logic between multiple components without repeating the same code.**
