import {SHOW_CITAS, ADD_CITA, DELETE_CITA} from './types';


export const  getCitas = () => {
    return {
        type: SHOW_CITAS
    }
}

export const addCita = cita => {
    return {
        type: ADD_CITA,
        payload: cita
    }
}

export const removeAppointment = id => {
    return {
        type : DELETE_CITA,
        payload: id
    }
}