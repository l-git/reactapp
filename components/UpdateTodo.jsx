import React from 'react';

class UpdateTodo extends React.Component{

    render(){

        return (<div>
            <div>
            <span>num:</span><input type="text" ref="num" />
            </div>
            <div>
                text:<input type="text" ref="text" />
                </div>
            <div>
                <button onClick={this.u}>update</button>
            </div>
        </div>);
    };

    u=(e)=> {

        let num=this.refs.num.value;
        let text=this.refs.text.value;
        
        this.props.u(num,text);


    }

};


export default UpdateTodo;

