const initialState = {
    currCar: {},
    cars: [],
    // filterBy: { labels: [], members: [], txt: '' },

}

export function carReducer(state = initialState, action) {
    let newState = state
    let cars
    let currCar
    switch (action.type) {
        case 'SET_CAR':
            return (newState = { ...state, currCar: action.currCar })
        case 'SET_CARS':
            return (newState = { ...state, cars: action.cars })

        //         case 'ADD_BOARD':
        //             return (newState = { ...state, cars: [...state.cars, action.board] })
        // case 'SET_FILTER':
        // 	return (newState = { ...state, filterBy: { ...action.filterBy } })

        default:
            return state
    }
}
