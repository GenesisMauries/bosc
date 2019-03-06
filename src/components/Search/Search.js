//Dependencias
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Estilos
import './Search.css';

class Search extends Component {
  render() {
    return (
        <header className="bar">
            <div className="input-group">
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" onChange={this.props.onSearch}/>
                <div className="input-group-append">
                    <span className="input-group-text">🔎</span>
                </div>
            </div>
        </header>
    );
  }
}

export default Search;
