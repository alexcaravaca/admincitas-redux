import React, { Component } from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types';

// redux  

import {connect} from 'react-redux';
import {addCita} from '../actions/CitasActions';
import { validarFormulario, mostrarError } from '../actions/errorActions';
const initialState = {
    cita: {
        pet:'',
        owner:'',
        date:'',
        hour: '',
        symptom: ''
   }
}

class Addcita extends Component {

    state = {
       ...initialState
    }

    componentWillMount(){
        this.props.validarFormulario(false);
    }

    onHandlechange = e => {
        this.setState({
           cita: {
            ...this.state.cita,
            [e.target.name]: e.target.value
           }
        })
    }
    addNewCita = e =>{
        e.preventDefault();
        const {pet,owner,date,hour,symptom} = this.state.cita;
        if(pet === "" || owner=== "" || date=== "" || hour=== "" || symptom=== ""){
            this.props.validarFormulario(true);
            // stop run 
           return; 
        }

        const newCita = {...this.state.cita};

        newCita.id = uuid();
       
       
        this.props.addCita(newCita);

       
        this.setState({
            ...initialState
        })

       
    } 
    render() {
        const error = this.props.error;
        return (
            <div className="card mt-5">
                <div className="card-body">
                     <h2 className="card-title text-center mb-5">Add Cita Here</h2>

                        {error ? <div className="alert alert-danger mt-2 mb-5 text-center">All fields are required! </div> : null}
                        <form onSubmit={this.addNewCita} >
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Name of Pet</label>
                                <div className="col-sm-8 col-lg-10">
                                    <input  type="text" className="form-control" placeholder="name pet" name="pet" onChange={this.onHandlechange} value={this.state.cita.pet} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Name Owner</label>
                                <div className="col-sm-8 col-lg-10">
                                    <input  type="text" className="form-control"  name="owner" placeholder="Name Owner of pet" onChange={this.onHandlechange} value={this.state.cita.owner}  />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                                <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                    <input type="date" className="form-control"  name="date" onChange={this.onHandlechange} value={this.state.cita.date} />
                                </div>                            

                                <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                                <div className="col-sm-8 col-lg-4">
                                    <input  type="time" className="form-control" name="hour" onChange={this.onHandlechange} value={this.state.cita.hour} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Symptom</label>
                                <div className="col-sm-8 col-lg-10">
                                    <textarea  className="form-control" name="symptom" onChange={this.onHandlechange} value={this.state.cita.symptom}  ></textarea>
                                </div>
                            </div>
                            <div className="form-group row justify-content-end">
                                <div className="col-sm-3">
                                    <button type="submit" className="btn btn-success w-100">Add</button>
                                </div>
                            </div>
                        </form>
                </div> 
                
            </div>
        )
    }
}


Addcita.propTypes = {
    addCita: PropTypes.func.isRequired,
    validarFormulario : PropTypes.func.isRequired,
    mostrarError : PropTypes.func.isRequired
}


const mapStateToProps = state => ({
    appoitments: state.appoitments.appoitments,
    error: state.error.error
})

export default connect(mapStateToProps,{addCita, validarFormulario, mostrarError}) (Addcita);