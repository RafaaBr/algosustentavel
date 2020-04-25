const homeDocuments = {
    addIdea: document.getElementById('add-idea'),
    comeback: document.getElementById('comeback'),
    home: document.getElementById('logo-id')
}

export function home () {
    homeDocuments.home.onclick = () => window.location.href = '../../index.html'
}

const hidden = () => document.querySelector('#pop-up-add-idea').classList.toggle('hide')