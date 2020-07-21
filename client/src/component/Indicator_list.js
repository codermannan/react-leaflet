import React from 'react';

const Indicator_list = () =>{

    return (
        <div className="row" style={{marginTop: "15px", zIndex:"10"}} >
            <div className="col-md-12">
                <div className="dropdown btn-group-justified">
                    <div className="btn-group">
                        <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">HR <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li><a href="#" className="distribution_of_workforce">Distribution of workforce by types (FWA,FPI,FWV,SACMO)</a></li>
                            <li><a href="#" className="vacancy_status">Vacancy status by type of provider</a></li>
                            <li><a href="#" style={{color:"#d3d3d3"}}>Projected density of provider by types</a></li>
                        </ul>
                    </div>
                    
                    <div className="btn-group">
                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Health Facility <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li><a href="#" style={{color:"#d3d3d3"}}>No of facility by types</a></li>
                            <li><a href="#" style={{color:"#d3d3d3"}}>No of UHFWCs by categories</a></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Population Coverage <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li><a href="#" style={{color:"#d3d3d3"}}>Percentage of population registered</a></li>
                            <li><a href="#" style={{color:"#d3d3d3"}}>Percentage of registered population by age group</a></li>
                            <li><a href="#" style={{color:"#d3d3d3"}}>Age dependency ratio</a></li>
                            <li><a href="#" style={{color:"#d3d3d3"}}>Percentage of household head by sex</a></li>
                            <li><a href="#" style={{color:"#d3d3d3"}}>Population pyramid</a></li>
                            <li><a href="#" style={{color:"#d3d3d3"}}>Percentage of ownership of mobile phone by household ,ELCO</a></li>
                        </ul>
                    </div>
                    
                    <div className="btn-group">
                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Family Planing <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li><a href="#" style={{color:"#d3d3d3"}}>Percentage of population are currently ELCO</a></li>
                        </ul>
                    </div>
                    
                    <div className="btn-group">
                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">MCH <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li>------</li>
                            <li>------</li>
                            <li>------</li>
                        </ul>
                    </div>
                   

                    <div className="btn-group">
                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Birth-Death <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li>------</li>
                            <li>------</li>
                            <li>------</li>
                        </ul>
                    </div>
                   
                    <div className="btn-group">
                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">General Patient <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li>------</li>
                            <li>------</li>
                            <li>------</li>
                        </ul>
                    </div>
                   
                    <div className="btn-group">
                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Indicator <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li>------</li>
                            <li>------</li>
                            <li>------</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}

export default Indicator_list;