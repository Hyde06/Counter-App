import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    

    render() {
        //console.log('Counters-Rendered'); 
        const {onReset, onDelete, onIncrement, onDecrement} = this.props;
        return (<div>
            <button
            onClick={onReset} 
            className="btn btn-primary btn-sm m-2">Reset</button>

        { this.props.counters.map(counter => 
            (<Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}
                //you can just pass counter which will include all the properties of the state counters instead of doing it 1 by 1
                //value={counter.value} 
                //id={counter.id} 
            />
        ))}

        </div>
    );
    }
}
 
export default Counters;




//Note: if you want to render a method you need to start with uppercase name.