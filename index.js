// import mermaid from 'https://cdn.skypack.dev/mermaid'

const res = async regex => {
    const data = await fetch('https://darsanfa.azurewebsites.net/api/nfa/compile?regex=' + regex)
    let text = await data.text();
    const mermaidDiv = document.getElementById('mermaid');
    mermaidDiv.innerHTML = 'flowchart LR\n' + text
    mermaidDiv.removeAttribute('data-processed')
    mermaid.init()
}

document.getElementById('generate').addEventListener('click', () => res(document.getElementById('regex-input').value))

mermaid.initialize({startOnLoad: false})
