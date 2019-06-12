import {SHOW_CITAS, ADD_CITA, DELETE_CITA} from '../actions/types';

// state inicial 


const initialState = {
    appoitments: []
}

export default function(state = initialState, action){
    switch (action.type) {
        case SHOW_CITAS:
            
            return{
                ...state

            }
        case ADD_CITA:
            return {
                ...state,
                appoitments : [...state.appoitments,action.payload]
            }

        case DELETE_CITA:
            return {
                ...state,
                appoitments : state.appoitments.filter(appoitment => appoitment.id !== action.payload)
            }

            default:
                return state;
    
      
    }
}