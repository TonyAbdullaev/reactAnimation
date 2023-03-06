# Getting Started with React-Transition-Group

React-Transition-Group is a library that exposes transition stages, manages classes and group elements 
and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.

## Installation 
#npm

`npm install react-transition-group --save`

#yarn

`yarn add react-transition-group`

## Components

### Transition

Has callback function that receive state `*-enter *-exit`

This element has props as:
-  in - show component (triggers the enter/exit states)
- timeout - duration of transition in ms. Can declare for all transitions or individually:
`timeout={500} - for all`
`timeout={{
  appear: 500,
  enter: 300,
  exit: 500,
}}
`
- unmountOnExit - unmount component after finished exiting
- mountOnEnter - mount component after first enter transition
- And callbacks for each status: `onEnter, onEntering, onEntered, onExit, onExiting, onExited`

### CSSTransition
It's built upon the `Transition` component, so it inherits all of its props.

Convenience of this component is that we can specify individual classNames for each state:
```
classNames={{
appear: 'my-appear',
appearActive: 'my-active-appear',
appearDone: 'my-done-appear',
enter: 'my-enter',
enterActive: 'my-active-enter',
enterDone: 'my-done-enter',
exit: 'my-exit',
exitActive: 'my-active-exit',
exitDone: 'my-done-exit',
}}
```