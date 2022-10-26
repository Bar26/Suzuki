
function getFormatedDate(date) {
    const options = { month: 'short',year:'numeric',day: 'numeric', weekday:'long' };
    let MM = date.toLocaleString('he-IL', options)
    const time = date.toLocaleTimeString('he-IL')
    const createdAt = ` ${MM}, ${time}`
    return createdAt
}

export const utilService = {
    getFormatedDate
}
