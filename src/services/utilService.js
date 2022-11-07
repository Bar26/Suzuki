
function getFormatedDate(date) {
    const options = { month: 'short',year:'numeric',day: 'numeric', weekday:'long' };
    let MM = date.toLocaleString('he-IL', options)
    const time = date.toLocaleTimeString('he-IL')
    const createdAt = ` ${MM}, ${time}`
    return createdAt
}

function saveToStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
}

function loadFromStorage(key) {
    const item = localStorage.getItem(key)
    return JSON.parse(item)
}

export const utilService = {
    getFormatedDate,
    saveToStorage,
    loadFromStorage
}
