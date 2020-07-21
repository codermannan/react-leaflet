import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Carousel from "./component/Carousel";
import Header from './component/Header';
import Indicator_list from './component/Indicator_list';
import Mapblock from './component/Map_block';

class App extends Component{

    render(){
        return (

        // <Carousel></Carousel><div className="wrapper"><div className="content-wrapper">
        // <test></test>  <Carousel/>

            <div className="App">
                
                    
                        <section className="content">
                            <Header upazila='195' user='10121' population='15.49 M' elco='1779.94 K' pregnant='0'/>
                            <Carousel/>
                            <Indicator_list/>
                            <Mapblock/>
                        </section>
                   
            </div>
            
        );
    };
}


export default App;
