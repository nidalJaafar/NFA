const res = async regex => {
    const data = await fetch('https://darsanfa.azurewebsites.net/api/nfa/compile?regex=' + regex)
    const mermaidDiv = document.getElementById('mermaid')
    mermaidDiv.innerHTML = 'flowchart LR\n' + await data.text()
    mermaidDiv.removeAttribute('data-processed')
    mermaid.init()
}

['click', 'touchstart'].forEach(event => document.getElementById('generate').addEventListener(event, (e) => {
    e.preventDefault()
    res(document.getElementById('regex-input').value)
}))

mermaid.initialize({startOnLoad: false})
