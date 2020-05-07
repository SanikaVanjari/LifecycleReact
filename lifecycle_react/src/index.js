import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Basic from './BasicLifecycle/Basic'
import App from './App'
import * as serviceWorker from './serviceWorker'
import FunctionComp from './Components/FunctionComp'
import SimpleClassComponent from './Components/SimpleClassComponent'
import LifecycleA from './BasicLifecycle/LifecycleA'
import Main from './Todo/Main'
import LifeCycle from '../src/BasicLifecycle/Lifecycle'

// Step 2: A simple JSX. // Step3: it is also called an element, used to built components
const element = <h1>Hello, world!</h1>
// React elements are immutable.
// Once you create an element, you can’t change its children or attributes.
//An element is like a single frame in a movie: it represents the UI at a certain point in time.

ReactDOM.render(
  // {/* <Basic></Basic> */}
  // <LifecycleA></LifecycleA>,
  // {/* <SimpleClassComponent></SimpleClassComponent> */}
  // {/* Step 4: Functional Components */}
  // {/* Basic Functional component that takes in a prop */}
  // {/* <FunctionComp name="Sanika"></FunctionComp> */}
  // {/* Can be called multip times to compose a UI */}
  // {/* <FunctionComp name="Sanika"></FunctionComp> */}
  // <Main></Main>
  <App></App>,
  // <LifeCycle></LifeCycle>,
  document.getElementById('root')

  // JSX being called in reactDom for step 2
  // element,
  // document.getElementById('root')
  //Step 1: Basics: any element can be added to directly render
  // <h1>Hello, world!</h1>,
  // document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
