import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="w-3/4 mt-32 mx-auto">
      <div className="qAnda-container">
        <h1 className="font-bold mb-4">
          How will you improve the performance of a React Application?
        </h1>
        <div className="answer">
          <h3>
            There are fine React performance optimization techniques which we
            recommend to overcome the costly DOM operations.
          </h3>
          <p>
            1. Windowing or List Virtualization in React Applications Many React
            applications having or displaying long lists usually bear
            performance issues. Before loading the app, the entire list will be
            rendered in the DOM, causing a UI lag and drastically affecting the
            React.js app performance.
          </p>
          <br />
          <p>
            2. Key Coordination for List Rendering When working with lists in
            React, you can assign key attributes to an element that will help
            render the upcoming ist items.
          </p>
          <br />
          <p>
            3. Lazy loading Images in React When your React application contains
            many images, there are high chances that your React app performance
            will degrade. It happens because the DOM will render all images
            altogether before displaying the user screen. Hence we suggest using
            Lazy loading images, which will wait until the turn of the image
            appears on the user screen and only render that particular image.
          </p>
          <br />
          <p>
            4. Functional Components & Component Interaction The subtle way of
            optimizing performance of React applications is by using functional
            components. Though it sounds cliche, it is the most straightforward
            and proven tactic to build efficient and performant React
            applications speedily.
          </p>
          <br />
          <p>
            5. Understand How to Handle 'this' Functional components do not
            require ‘this’ binding, you might wish to use them whenever
            possible. But, if you are using ES6 binding, React will not
            auto-bind your functions within components. However, you may
            manually achieve the binding. Here are some ways to bind your
            components and functions: 🗝️ Bind in render 🗝️ Allow arrow function
            in render 🗝️ Bind in constructor 🗝️ Bind arrow function in the class
            property [Not in official ECMAscript]
          </p>
          <br />
          <p>
            6. Use a Function in 'SetState' We recommend using a function and
            not an object in the setState function. This suggestion is because
            state changes aren’t implied immediately, as conveyed by React docs.
          </p>
          <br />
          <p>
            7. Utilize Prop-Types Prop-types is a library for type checking of
            props. The below code snippet shows how you can import the function
            from the prop-type library
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="qAnda-container mt-4">
        <h1 className="font-bold mb-4">
          What are the different ways to manage a state in a React application?
        </h1>
        <div className="answer">
          <h3>
            When we talk about state in our applications, it’s important to be
            clear about what types of state actually matter. <br />
            There are four main types of state you need to properly manage in
            your React apps:
          </h3>
          <p>
            1. Local state <br />
            2. Global state <br />
            3. Server state <br />
            4. URL state
          </p>

          <p>
            <br />
            <span className="font-bold">Local (UI) state</span> – Local state is
            data we manage in one or another component. <br />
            <br />
            Local state is most often managed in React using the useState hook.{" "}
            <br />
            <br />
            For example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form’s
            inputs.
          </p>
          <br />
          <p>
            <span className="font-bold">Global (UI) state</span> – Global state
            is data we manage across multiple components. <br />
            <br />
            Global state is necessary when we want to get and update data
            anywhere in our app, or in multiple components at least. <br />
            <br />
            A common example of global state is authenticated user state. If a
            user is logged into our app, it is necessary to get and change their
            data throughout our application. <br />
            Sometimes state we think should be local might become global.
          </p>
          <br />
          <br />
          <p>
            <span className="font-bold">Server state</span> –Data that comes
            from an external server that must be integrated with our UI state.{" "}
            <br />
            <br />
            Server state is a simple concept, but can be hard to manage
            alongside all of our local and global UI state.
            <br />
            <br />
            There are several pieces of state that must be managed every time
            you fetch or update data from an external server, including loading
            and error state. <br />
            <br />
            Fortunately there are tools such as SWR and React Query that make
            managing server state much easier.
          </p>
          <br />
          <br />
          <p>
            <span className="font-bold">URL state</span> – Data that exists on
            our URLs, including the pathname and query parameters.
            <br />
            <br />
            URL state is often missing as a category of state, but it is an
            important one. In many cases, a lot of major parts of our
            application rely upon accessing URL state. Try to imagine building a
            blog without being able to fetch a post based off of its slug or id
            that is located in the URL!
            <br />
            <br />
            There are undoubtedly more pieces of state that we could identify,
            but these are the major categories worth focusing on for most
            applications you build. <br />
            <br />
          </p>
        </div>
      </div>
      <div className="qAnda-container mt-4">
        <h1 className="font-bold mb-4">
        How does prototypical inheritance work?
        </h1>
        <div className="answer">
            <p>JavaScript is a prototype-based, object oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. <br /><br />

Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). <br /><br />

JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
        </div>
      </div><br /><br />
      <div className="qAnda-container mt-4">
        <h1 className="font-bold mb-4">
        Why you do not set the state directly in React?
        </h1>
        <div className="answer">
            <p>React components rely on state changes to determine when to re-render. When you use the setter function (setProducts), React knows that the state has changed and will schedule a re-render of the component with the new state. Directly mutating the state variable (e.g., products = [...]) does not trigger a re-render because React is not aware of the change.<br /><br />

            The setter function allows for functional updates, which are important when the new state depends on the previous state. This is especially useful in scenarios where state updates are asynchronous or when you have multiple state updates happening in quick succession.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
