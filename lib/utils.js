function reload(arr, component, parent_component, place) {
    place.innerHTML = ""

    for (let item of arr) {
        const todo = component(item)

        const category_elem = place.querySelector(`[data-${item.category}]`)


        if(category_elem) {
            category_elem.append(todo)
        } else {
            const new_category_elem = parent_component(item.category)

            new_category_elem.append(todo)
        }

        place.append(category_elem)
    }
}


function submit(form, arr) {
    let data = {
        id: crypto.randomUUID()
    }

    const fm = new FormData(form)

    fm.forEach((val, key) => data[key] = val)

    arr.push(data);
}



export { reload, submit }