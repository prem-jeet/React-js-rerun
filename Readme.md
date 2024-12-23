# React

> ## React is free and <b>open source</b> Javascript <b>library specifically</b> designed for building user interfaces (Uis)
>
> - Developed by facebook in `2011`
> - Use `Components` Model
> - Build `Modular` Apps
> - Learn Once, Write Anywhere

## Developed by Facebook

> React is the most popular, powerful front-end library developed and sponcered by `Facebook`

## components Model

> A component is a peace of the UI that has it's own logic and appearance. A component can be small as a button or large as entire page

## Learn once, Write anywhere

> React native -> Mobile<br>
> React Desktop -> Desktop<br>
> React 360 -> VR

<br>
<br>

# Componets

> Components are independent and reusable bits of code. They serve the same purpose as JS funcitons but work in isolation and return HTML.

<br>
<br>

# JSX (Js XML)

> JSX allows us to write HTML in Ract. JSX makes it easier to write & add HTML in React.<br>
> The HTML looking syntax in the jsx file is not HTML ,it got converted to JS by the compiler like Babel then it gets injected into the DOM where it gets conveerted to actual HTML.
>
> - JSX must return only one HTML root (we can use empty tag to return multiple roots <br>`empty tag  <></>`).
>
> ```
> ✅
> fucntion <compoent name>({destructured props}){
>    return (
>        <div>
>            <p>Hello</p>
>            <p>World</p>
>        </div>
>    )
> }
>
> ❌
> fucntion <compoent name>({destructured props}){
>    return (
>            <p>Hello</p>
>            <p>World</p>
>    )
> }
> ```
>
> - Unlike HTML, in JSX `every tag must be closed`.
>
> - In JSX to assign class to an element we use `className` keyword instead of the class keyword as the class keyword conflicts with the class keyword of Javascript. Similary other keywords that clash with some attributes of HTML like `for` for label tag is written as `htmlFor` in JSX or it will clash with the for loop keyword of Javascript.

<br>
<br>

# { Expression in JSX }
> With JSX you can write expressions inside curly braces. the expressions can be react variables, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.
> ```
> const App = () => {
>    return <p>2 + 2 = {4+4}<p>
>}
> will return a <p> element with the innerText value as '2 + 2 = 8'
>```