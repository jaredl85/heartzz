import React from 'react';
import Heart from './components/Heart';

//const array = [[150, 300], [250, 400], [350, 500], [450, 600]];

const App = () => {
    return ( 
        <div>
            <Heart top={100} left={90}/>
            <Heart top={300} left={200}/>
        </div>
     );
}
 
export default App;