import React from 'react';



class DelTodo extends React.Component{

    render(){

        return (<div>
            <div>id:<input type="text" ref="t" /> </div>
            <button onClick={this.d}>del</button>

        </div>);

    }

    d=(e)=>{
        var id=this.refs.t.value;
        this.props.onDelClick(id);
    }


};



export default DelTodo;




