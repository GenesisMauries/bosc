//Dependencias
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Componentes
import Search from '../Search/Search'
//Varios
import './Data.css';

class Data extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            loaded: false,
            filter:{
                name:'',
                status:''
            }
        }
    }

    handleOnSearch(e){
        let newFilter = Object.assign({}, this.state.filter,  {[e.target.name]:[e.target.value]})
        this.setState({
            filter: newFilter
        })
        console.log(newFilter)
    }

    handleOnFilter(filter, data){
        let regex = new RegExp(filter.search, 'i')
        return data.filter(q => (regex.test(q.name)|| regex.test(q.status)))
    }

    handleOnFilter = this.handleOnFilter.bind(this)
    handleOnSearch = this.handleOnSearch.bind(this)

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
            <React.Fragment>
            <Search onSearch={this.handleOnSearch}/>
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
            </React.Fragment>
            );
        }
    }
}

export default Data;
