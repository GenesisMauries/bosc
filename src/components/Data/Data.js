//Dependencias
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Varios
import './Data.css';

class Data extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            loaded: false
        }
    }
    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character/')
        .catch((error)=>{
            this.message(error)
        })
        .then((response) => {
        return response.json()
        })
       .then((response) => {
        this.setState({ 
            loaded: true,
            data: response })
        console.log(this.state)
        })
        
    }
  render() {
      const {data, loaded} = this.state

      if(!loaded){
          return <div className="text-center">
            <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Cargando...</span>
            </div>
            </div>
        }else{
          return (
                <div className="container">
            {data.results.map(item=>(
                <div key= {item.id} className="card" style={{width: "16rem"}}>
                    <img src={item.image} className="card-img-top" alt="foto"/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.status}</p>
                {/* <a href="#" className="btn btn-primary"></a> */}
                    </div>
                </div>
            ))}
            </div>
            );
        }
    }
}

export default Data;
