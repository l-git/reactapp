import React from 'react';

//import style from './css/c1.css';

import style from './css/c1.css';





class C1 extends React.Component{
    
    constructor(props){
        super(props);

        this.state={

            data:[
                {id:1,name:'n1',age:12},
                {id:2,name:'n13',age:13},
                {id:5,name:'n12',age:14}
            ]
            ,
            t:'abc'

        }

    }

    f1=(e)=>{

        console.log(this);

    }

    c=(e)=>{

        this.setState({t:e.target.value});

    }

    render(){

        return (
            <div>

                <p onClick={this.f1}>C1</p>
                <p className="red">12</p>
                <p className={style.red}>style.red</p>
                {/*
                <p className={style.red}>style.red</p>
                <p className={style['red']}>style['red']</p>
                */}

                <div>
                    <Header />

                    <table>
                        <tbody>
                        {this.state.data.map((obj,index)=>{

                            return (<TableRow key={obj.id} data={obj}/>);

                        })}
                        </tbody>
                        </table>

                    </div>

                        <br />
                        <div>

                        <input type="text" value={this.state.t} onChange={this.c} />

                        <p>{this.state.t}</p>

                            </div>




            </div>
        );
    }
}


class Header extends React.Component{

    render(){
        


        return (<div>
                Header
            </div>
            );
    }

}

class TableRow extends React.Component{

    f1=(id,e)=>{

        alert(id);

    }

    render(){

        return (

            <tr onClick={(e)=>this.f1(this.props.data.id,e)}>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
                </tr>

        );


    }


}




module.exports= C1;
