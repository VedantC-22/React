//backend how react render elements
function render(reactElement, root){

    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    for (let prop in reactElement.props){
        if (prop == 'children') continue;
        element.setAttribute(prop, reactElement.props[prop])
    }

    root.appendChild(element)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me'
}

const root  = document.getElementById('root')
console.log(reactElement.children)
render(reactElement, root)
