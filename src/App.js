import React from 'react';
import './App.scss';

import Layout from './containers/Layout/Layout';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faAngleLeft,faAngleRight,faChevronUp,faPlus,faMinus,faTimes,faMapMarkerAlt,faPlay,faTh, faThList} from '@fortawesome/free-solid-svg-icons';
library.add(faAngleLeft,faAngleRight,faChevronUp,faPlus,faMinus,faTimes,faMapMarkerAlt,faPlay,faTh,faThList);



function App() {

 
  return (
    <React.Fragment>
    <div className="App">
        <Layout/>
    </div>
    </React.Fragment>
  );
}

export default App;
