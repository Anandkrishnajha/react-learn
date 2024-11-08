import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Anand from './Anand.jsx'

// Decalre a name and adding HTML form in it is a way to do react
const AnotherElement=(
        <h1><a href="https://google.com" target='_blank'>Visit Google</a></h1>
)

// Make an function and adding HTML form in it is a way to do react
function MyApp(){
    return(
        <h1>THis is a myApp frunction</h1>
    )
}

//This will won't work as we expent it to do because these are thing which we used in custom template so react don't know what this is
const reactElement={
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

//SO now let's don it how react can understand in that way
const areactElement=React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'Click me to visit Google'
)

createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Anand/>
    <MyApp/>
    </>
    // AnotherElement,
    // areactElement
)
