import React, { Component } from 'react'
import styles from '../styles/Home.module.css'

export default class Prices extends Component {

    state={
        currency:"USD"
    }
    render() {
        let list='';
        if(this.state.currency==='USD'){
            list=<li>
            Bitcoin rate for {this.props.bpi.USD.descpription}
            :<strong> <a>{this.props.bpi.USD.rate} </a></strong>
             <span >
                {this.props.bpi.USD.code} 
            </span>
        </li>
        }else if(this.state.currency==='GBP'){
            list=<li>
            Bitcoin rate for {this.props.bpi.GBP.descpription}
            :<strong> {this.props.bpi.GBP.rate} </strong>
             <span >
                {this.props.bpi.GBP.code}
            </span>
        </li>
        }else if(this.state.currency==='EUR'){
            list=<li>
            Bitcoin rate for {this.props.bpi.EUR.descpription}
            :<strong> {this.props.bpi.EUR.rate} </strong>
             <span >
                {this.props.bpi.EUR.code}
            </span>
        </li>
        }


        return (
            <div className={styles.code}>
                <ul>
                    {list}
                </ul>
                <br/>
                <select onChange={e=> this.setState({currency:e.target.value})}
                 className="formselect"
                >
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                </select>
                <style jsx>{
                ` select{
                    heigth:990px;
                    width:360px;
                    font-family:Fira Code;
                    font-size:20px;
                    align:center;
                } 
                
                
                `}</style>
            </div>
        )
    }
}

