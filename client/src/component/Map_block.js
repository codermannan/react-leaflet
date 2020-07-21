import React from 'react';
import Mapcomponent from './MapGeojson'

const Mapblock = () => {

    return(
        <div className="row" style={{marginTop:"15px"}}>
            <div className="col-md-6">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb map-breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Bangladesh</a></li>
                    </ol>
                </nav>
                <div className="row" style={{height: "650"}}>
                    <Mapcomponent/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="panel panel-success population-panel box box-danger" style={{height: "650", width: "auto"}}>
                    <div className="panel-heading">
                        <div className="panel-title indicatortitle"></div>
                    </div>

                    <div className="panel-body">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                                <a href="#pop-graph" aria-controls="pop-graph" role="tab" data-toggle="tab"> <span className="glyphicon glyphicon-stats"></span> Chart </a>
                            </li>
                            <li role="presentation">
                                <a href="#pop-tabular" aria-controls="pop-tabular" role="tab" data-toggle="tab"> <span className="glyphicon glyphicon-calendar"></span> Table </a>
                            </li>
                        </ul>

                        <div className="tab-content tab-body">
                            <div role="tabpanel" className="tab-pane active" id="pop-graph">
                                <div id="pop-chart-container">
                                    <div id="chart_div" style={{height: "350", marginTop: "10"}}></div>
                                </div>
                            </div>

                            <div role="tabpanel" className="tab-pane" id="pop-tabular">
                                <div className="table-responsive no-padding">
                                    <table id="data-table" className="table table-bordered table-striped table-hover">
                                        <thead id="tableHeader"></thead>
                                        <tbody id="tableBody"></tbody>
                                        <tfoot id="tableFooter"></tfoot>
                                    </table>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="pop-downlaod"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Mapblock;