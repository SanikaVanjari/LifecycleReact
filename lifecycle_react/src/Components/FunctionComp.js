import React from 'react'

{
  /* Step 4: Functional Components */
}
{
  /* Basic Functional component that takes in a prop */
}
function FunctionComp(props) {
  return <h1>Hello, {props.name}</h1>
}

export default FunctionComp

// Note: Always start component names with a capital letter.

//React treats components starting with lowercase letters as DOM tags.
//For example, <div /> represents an HTML div tag, but <Welcome /> represents
//a component and requires Welcome to be in scope.

//Props are Read-Only
//Whether you declare a component as a function or a class, it must never modify its own props.
//All React components must act like pure functions with respect to their props.
// Props are only to be used by components not modified by them.