import React from 'react';
import PropTypes from 'prop-types';

// redux  

import {connect} from 'react-redux';
import {removeAppointment} from '../actions/CitasActions';

const Appointment = ({appointment, removeAppointment}) => {
    return ( 
       <div className="media mt-3"> 
            <div className="media-body">
                <h3 className="mt-0">{appointment.pet}</h3>
                <p className="card-text"><span>Name of Owner: </span>{appointment.owner}</p>
                <p className="card-text"><span>DATE: </span>{appointment.date}</p>
                <p className="card-text"><span>Hour: </span>{appointment.hour}</p>
                <p className="card-text"><span>Sympton: </span></p>
                <p className="card-text">{appointment.symptom}</p>
                <button 
                className="btn btn-danger"
                onClick={() =>removeAppointment(appointment.id)}>Delete Appointment</button>
            </div>
       </div>
     );
}
Appointment.propTypes = {
    appointment: PropTypes.object.isRequired
}


export default connect(null, {removeAppointment}) (Appointment);