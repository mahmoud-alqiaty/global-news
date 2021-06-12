
 export const initstate = {
    genaralLoading: true,
    businessLoading: true,
    entertainmentLoading: true,
    healthLoading: true,
    scienceLoading: true,
    sportsLoading: true,
    technologyLoading: true,
    popularLoading: true,
    searchLoading: true,

    genaral:{},
    business:{},
    entertainment:{},
    health:{},
    science:{},
    sports:{},
    technology:{},
    popular: {},
    search: {},
    
    error: ""
}


export const reducer = (state, {type, payload})=>{
    switch (type) {
    // =====request Actions======
        case "FETCH_REQUEST_genaral":
            return{
                ...state,
                genaralLoading: true
            }
        case "FETCH_REQUEST_business":
            return{
                ...state,
                businessLoading: true
            }
        case "FETCH_REQUEST_entertainment":
            return{
                ...state,
                entertainmentLoading: true
            }
        case "FETCH_REQUEST_health":
            return{
                ...state,
                healthLoading: true
            }
        case "FETCH_REQUEST_science":
            return{
                ...state,
                scienceLoading: true
            }
        case "FETCH_REQUEST_sports":
            return{
                ...state,
                sportsLoading: true
            }
        case "FETCH_REQUEST_technology":
            return{
                ...state,
                technologyLoading: true
            }
        case "FETCH_REQUEST_popular":
            return{
                ...state,
                popularLoading: true
            }
        case "FETCH_REQUEST_search":
            return{
                ...state,
                searchLoading: true
            }

            // =====success Actions======
        case "FETCH_SUCCESS_general":
            return{
                ...state,
                genaralLoading: false,
                genaral: payload,
                error: "", 
            }
        case "FETCH_SUCCESS_business":
            return{
                ...state,
                businessLoading: false,
                business: payload,
                error: "", 
            }
        case "FETCH_SUCCESS_entertainment":
            return{
                ...state,
                entertainmentLoading: false,
                entertainment: payload,
                error: "", 
            }
        case "FETCH_SUCCESS_health":
            return{
                ...state,
                healthLoading: false,
                health: payload,
                error: "", 
            }
        case "FETCH_SUCCESS_science":
            return{
                ...state,
                scienceLoading: false,
                science: payload,
                error: "", 
            }
        case "FETCH_SUCCESS_sports":
            return{
                ...state,
                sportsLoading: false,
                sports: payload,
                error: "", 
            }
        case "FETCH_SUCCESS_technology":
            return{
                ...state,
                technologyLoading: false,
                technology: payload,
                error: "", 
            }
        case "FETCH_SUCCESS_popular":
            return{
                ...state,
                popularLoading: false,
                popular: payload,
                error: "", 
            }
        case "FETCH_FROM_localstorage":
            return{
                payload
            }
        case "FETCH_SUCCESS_search":
            return{
                ...state,
                searchLoading: false,
                search: payload,
                error: "", 
            }

            // =====failure Actions======
        case "FETCH_FAILURE_general":
            return{
                ...state,
                genaralLoading: false,
                genaral: {},
                error: payload,
            }

        case "FETCH_FAILURE_business":
            return{
                ...state,
                businessLoading: false,
                business: {},
                error: payload, 
            }

        case "FETCH_FAILURE_entertainment":
                return{
                    ...state,
                    entertainmentLoading: false,
                    entertainment: {},
                    error: payload, 
                }
            case "FETCH_FAILURE_health":
                return{
                    ...state,
                    healthLoading: false,
                    health: {},
                    error: payload, 
                }
            case "FETCH_FAILURE_science":
                return{
                    ...state,
                    scienceLoading: false,
                    science: {},
                    error: payload, 
                }
            case "FETCH_FAILURE_sports":
                return{
                    ...state,
                    sportsLoading: false,
                    sports: {},
                    error: payload, 
                }
            case "FETCH_FAILURE_technology":
                return{
                    ...state,
                    technologyLoading: false,
                    technology: {},
                    error: payload, 
                }

            case "FETCH_FAILURE_popular":
                return{
                    ...state,
                    popularLoading: false,
                    popular: {},
                    error: payload, 
                }
        default:
            return state
    }
}