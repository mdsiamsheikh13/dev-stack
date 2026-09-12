# Dev Stack

Dev Stack is a web application that helps developers explore different technologies and build their own development stack. Users can explore various technologies, add them to their personal stack, remove individual technologies, or clear the entire stack.

## Live Demo

[View Live Demo](https://web-stack-assignment5.netlify.app/)

## GitHub Repository

[View Source Code](https://github.com/mdsiamsheikh13/dev-stack)

---

# Project Overview

Dev Stack provides a simple and interactive way to explore popular technologies used in modern web development.

Users can explore different technologies such as React, Node.js, MongoDB, and many others. Each technology is presented with useful information including its category, description, difficulty level, rating, badge, and icon.

The technology data is loaded dynamically from a JSON file, and React state is used to manage the technologies selected by the user.

The project was built as a frontend React application with a responsive and user-friendly interface.

---

# Technology Used

* React
* Vite
* Tailwind CSS
* JavaScript
* React Toastify
* React Icons
* JSON
* Git & GitHub

---

# Features

## 1. Explore Technologies

Users can explore different development technologies and view information such as:

* Technology name
* Category
* Description
* Difficulty level
* Rating
* Technology badge
* Technology icon

Each technology is displayed through a dedicated technology card.

## 2. Build Your Own Stack

Users can create their own development stack by clicking the **Add to Stack** button.

After adding a technology:

* It appears in the **Your Stack** section.
* The Add to Stack button becomes disabled.
* A success toast notification is displayed.
* The same technology cannot be added more than once.

## 3. Manage Your Stack

Users can easily manage the technologies they have selected.

They can:

* Remove an individual technology.
* Remove all selected technologies at once.
* See the current number of technologies in their stack.
* Receive toast notifications when technologies are added or removed.

## 4. Responsive User Interface

The application is designed with a responsive layout so that the interface can adapt to different screen sizes and provide a better experience across devices.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

React uses JSX because it makes the UI structure easier to read and understand. It also allows us to combine UI structure and JavaScript logic in a convenient way.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are used to pass information or functions between components.

**State** is data managed inside a component that can change over time.

In this project, state is used to keep track of the technologies selected by the user.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows a React component to store and update data that can change over time.

In this project, I used `useState` to keep track of the technologies selected by the user.

When a user adds or removes a technology, the state is updated, and React automatically updates the UI to reflect the changes.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component, such as fetching data, working with APIs, or interacting with external systems.

However, I did not use `useEffect` in this project.

The technology data is loaded using `fetch()` inside an asynchronous function, and the fetched data is then used to display the technologies in the UI.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` for each item in a list so that it can identify individual elements efficiently when the list changes.

Keys help React understand which items have been added, removed, or updated.

In this project, I used the technology's `id` as the `key` because each technology has a unique identifier.

---

## 6. What is conditional rendering? Show one place where you used it.

Conditional rendering means displaying different UI elements depending on a particular condition.

I used conditional rendering in the **Your Stack** section.

When the user has not selected any technology, the application displays a message indicating that the stack is empty.

When technologies have been added, the selected technologies are displayed instead.

This allows the UI to change based on the current state of the application.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using **props**.

In this project, the parent component passes technology data and required functions to the technology card component through props.

A child component does not directly modify the parent's state.

Instead, the parent passes a function to the child through props. When an event occurs, such as clicking the **Add to Stack** button, the child component calls that function.

The parent function then updates the state, and React re-renders the necessary parts of the UI.
