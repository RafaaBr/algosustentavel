const buttons = Object.freeze({
    addIdea: document.getElementById('add-idea'),
    comeback: document.getElementById('comeback')  
})

const hidden = () => document.querySelector('#pop-up-add-idea').classList.toggle('hide')

buttons.addIdea.onclick = () => {
    hidden()
}

buttons.comeback.onclick = () => {
    hidden()
}



