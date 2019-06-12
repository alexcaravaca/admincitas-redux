import React, { Component } from 'react';
import Header from './components/Header';
import Addcita from './components/Addcita';
import Listappoitments from './components/Listappoitments'


//redux 
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  

  render() {
    return (
    
    <Provider store={store}> 
      <div className="continer">
          <Header
          title={'Admin patients of Veterinary'}
          />

          <div className="row"> 
            <div className="col-md-6"> 
              <Addcita
              />
            </div>
            <div className="mt-5 col-md6">
                <Listappoitments
                 
                />
            </div>


          </div>
      </div>
      </Provider> 
    );
  }
}

export default App;
