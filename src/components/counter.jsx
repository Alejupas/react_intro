import React, {Component} from 'react';

class Counter extends Component {

    //lokali komponento busena
    state = {
        count: 0,
        imgUrl: 'https://placeimg.com/500/200/tech',
        colors: ['yellow', 'green', 'blue'],
    }

    h2ElStyles = {
        background: 'tomato',
        color: 'snow',
        textAlign: 'center',
    }

    handleIncrement(){
        console.log('you pressed a button');
        console.log("this.state.count",this)
        //obj.method() this === obj
        // function() this === window, undefined
    }

    render(){
        return (
            <div className="container mt-4">
               <h2 style={{fontSize: '3em'}}>I am React Counter Component</h2>
               <span className="badge badge-info mr-3">{ 5 }</span>
               <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button onClick={this.handleIncrement} className="btn btn-warning">Press me</button> 
                
                <ul className="list-group">
                    { this.state.colors.length === 0 && <p className="alert alert-warning">There are no colors left</p>}
                    { this.renderColors()}
                    
                </ul>

                <div className='mt-5'>
                    <img src={this.state.imgUrl} alt="tech" />
                </div>
            </div>            
        );
    }

    renderColors(){

            return  this.state.colors.map(color => 
                (<li key={color}
                style={{backgroundColor: color}} 
                className="list-group-item">{color}</li>))
        }

    getBadgeClasses() {
        let badgeClasses = 'badge mr-3 badge-';
        badgeClasses += this.state.count === 0 ? 'danger' : 'info';
        return badgeClasses;
    }

    formatCount(){
        //destrukturizavimas
        const {count} = this.state
        return count === 0 ? 'Out Of Stock' : count
    }


}

export default Counter