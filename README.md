**React Router** is a library that lets you create **multiple pages in a React application** without reloading the whole website.

Think of it like this:

Imagine your app is a **house**.

* **Home** → Living room
* **About** → Bedroom
* **Contact** → Kitchen

Instead of building three different houses, React Router lets people **walk from one room to another** inside the same house.

### Without React Router

Every time you click a link:

* The browser reloads the entire page.
* It requests a new page from the server.

### With React Router

When you click a link:

* Only the required part of the page changes.
* The rest of the app stays the same.
* It's much faster and feels smoother.

---

## Example

Suppose your website has three pages:

* `/` → Home
* `/about` → About
* `/contact` → Contact

With React Router, when a user visits:

```
/about
```

React displays the **About** component.

When they visit:

```
/contact
```

React displays the **Contact** component.

---

## Basic Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
```

Here:

* `BrowserRouter` enables routing.
* `Routes` holds all the routes.
* `Route` connects a URL (`path`) to a React component (`element`).

---

## Navigation

Instead of using HTML:

```html
<a href="/about">About</a>
```

React Router uses:

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

`Link` changes the page **without refreshing** the browser.

---

## Why use React Router?

* ✅ Create multiple pages in a React app.
* ✅ Switch pages without reloading.
* ✅ Faster and smoother user experience.
* ✅ Keep the browser URL in sync with the current page.
* ✅ Support features like nested routes and protected pages.

---

## Simple analogy

Think of **React** as a **book**, and **React Router** as the **table of contents**.

* React creates all the pages (chapters).
* React Router helps users jump to the correct page (chapter) based on the URL.

So, if someone goes to `/about`, React Router knows to display the **About** page without reopening the whole book.
