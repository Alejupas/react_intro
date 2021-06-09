import React, {Component} from 'react';

class Counter extends Component {

    //lokali komponento busena
    state = {
        count: 1,
        imgUrl: 'https://placeimg.com/500/200/tech',
        colors: ['yellow', 'green', 'blue'],
    }

    h2ElStyles = {
        background: 'tomato',
        color: 'snow',
        textAlign: 'center',
    }

    // constructor(){
    //     super();
    //     console.log('constructor', this);
    //     // this --> Counter
    //     // this --> Counter this.handleIncrement viduje
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = (btnId) => {
        console.log('btnId',btnId);
        // nIEKADA NEKEICIAM STATE TIESIOGIAI !!!!!!!!!
        //nes tik consolej atsivaizduos bet ne dome. lol
        // console.log("this.state.count", this.state.count)
        // this.state.count ++;
        if (btnId === 'btn_1') {
            this.setState({count : this.state.count + 1})
            return;
        } 
        this.setState({count: this.state.count - 1})
    }
    


    render(){
        return (
            <div className="container mt-4">
               <h2 style={{fontSize: '3em'}}>I am React Counter Component</h2>
               {/* <span className="badge badge-info mr-3">{ 5 }</span> */}
               <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button onClick={()=>this.handleIncrement('btn_1')} className="btn btn-warning">Increase 1</button> 
                <button onClick={()=>this.handleIncrement('btn_2')} className="btn btn-info">Minus 1</button> 
                
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