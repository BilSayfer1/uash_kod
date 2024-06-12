import { Option } from "./components/Option.js"
import { Todo, UL } from "./components/Todo.js"
import { reload, submit } from "./lib/utils.js"

const forms = Array.from(document.forms)
const select = document.getElementById('categs')
const container = document.querySelector('.container')
const store = {
    todos: [],
    categories: []
}

forms.forEach((form) => {
    form.onsubmit = (e) => {
        e.preventDefault();

        submit(e.target, store[form.name])

        if(form.name === 'categories') {
            for(let category of store[form.name]) {
                select.append(Option(category))
            }
        } else {
            reload(store[form.name], Todo, UL, container)
        }

    }
})
