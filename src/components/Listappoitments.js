import React, {Component} from 'react';
import Appointment from './appointment';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getCitas} from '../actions/CitasActions';
import store from '../store';

store.subscribe( () => {
    localStorage.setItem('citas', JSON.stringify(store.getState()));
})
class Listappoitments  extends Component{
    

    componentDidMount(){
        this.props.getCitas();
    }
    render(){
        const appoitments = this.props.appoitments;
        const message = Object.keys(appoitments).length ===0 ? 'There is not appoitments': 'Admin your Appoitments'
        return(
            
                <div className="card mt-2 py-5"> 
                    <div className="card-body">
                        <h2 className="card-title text-center"> {message}</h2>
        
                        <div className="lista-citas">
                            {appoitments.map(appointment => (
                                <Appointment 
                                    key={appointment.id}
                                    appointment={appointment}
                                    removeAppointment={this.props.removeAppointment}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            
        );
    }
}

Listappoitments.propTypes = {
    appoitments: PropTypes.array.isRequired,

}
const mapStateToProps = state => ({
    appoitments: state.appoitments.appoitments
})

export default connect(mapStateToProps, {getCitas}) (Listappoitments);