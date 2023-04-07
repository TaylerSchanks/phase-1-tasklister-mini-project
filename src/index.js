// your code here

document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector('form')
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        addToDo(e.target['new-task-description'].value)
        form.reset()
    })
})

function addToDo(toDo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener("click", deleteToDo)
    btn.textContent = 'x'
    p.textContent = `${toDo} `
    p.appendChild(btn)
    document.querySelector('#list').appendChild(p)

}

function deleteToDo(e) {
    e.target.parentNode.remove()
}