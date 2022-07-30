const res = async regex => {
    const data = await fetch('https://darsanfa.azurewebsites.net/api/nfa/compile?regex=' + regex)
    let text = await data.text();
    const mermaidDiv = document.getElementById('mermaid');
    mermaidDiv.innerHTML = 'flowchart LR\n' + text
    mermaidDiv.removeAttribute('data-processed')
    mermaid.init()
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    res(document.getElementById('regex-input').value)
})

mermaid.initialize({startOnLoad: false})
