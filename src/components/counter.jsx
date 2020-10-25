import React, { Component } from 'react';


class Counter extends Component {
   
    /* state = {
        value: this.props.counter.value
        tag: []
    };
     constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
     adding a custom constructor to access this feature. }

    handleIncrement = product => {
        this.setState({value: this.state.value + 1});
        
        // console.log('Increment Clicked', this);
        //object.method();
        //function();
    };*/

    /*doHandleIncrement = () => {
        this.handleIncrement({ id : 1 });
    };(replaced by the inline code for the onClick func.)

    renderTags() {
        if(this.state.tag.length === 0)
        return <p>There are no tags!!!</p>;
        
        return <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>;
          this is how you render a list using the map feature */
    

    render() {
        //console.log('Counter-Rendered');
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">Increment</button>
            
            <button 
            onClick={() => this.props.onDecrement(this.props.counter)} 
            className="btn btn-secondary btn-sm m-2">Decrement</button>

            <button onClick={() => this.props.onDelete(this.props.counter.id)}
             className="btn btn-danger btn-sm m-2">Delete</button>
            {//<h4>Counter #{this.props.id}</h4>
            /*the && operator is used between 2 non boolean values first is bol. and second is string
            {this.state.tag.length === 0 && 'Please create a new tag!!'}
            {this.renderTags()};*/}
        </div>
        );
    }



    getBadgeClasses() {
        var classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const{ value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter ;
