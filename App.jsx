import React from 'react';

import jsPDF from './jspdf.debug.js';
import './bootstrap/css/bootstrap.min.css';
import './html2canvas.js';

class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 0
      }


   };

   generatePDF() {
      var doc = new jsPDF();
      console.log(doc);
      doc.addHTML(document.getElementById("bebe"), 15, 15, function () {
         doc.save('Test.pdf');
      });
   }

   render() {
      return (
         <div>
            <div id="bebe">
               <center><h1>Item In Report</h1></center>
               <div className="container-fluid">
                  <div className="row">
                     <div className="form-horizontal">
                        <div className="col-sm-8 col-sm-offset-2 form-container">
                             <div className="form-group">
                                 <label className="col-sm-3 control-label" htmlFor="report-item-in-id">Item-In ID: </label>
                                 <div className="col-sm-9">
                                    <input type="text" value="IN-0001" id="report-item-in-id" className="form-control" />
                                 </div>
                             </div>
                             <div className="form-group">
                                 <label className="col-sm-3 control-label" htmlFor="report-supplier-receipt">Supplier Receipt No: </label>
                                 <div className="col-sm-9">
                                    <input type="text" value="1" id="report-supplier-receipt" className="form-control" />
                                 </div>
                             </div>
                             <div className="form-group">
                                 <label className="col-sm-3 control-label" htmlFor="report-supplier-invoice">Supplier Invoice No: </label>
                                 <div className="col-sm-9">
                                    <input type="text" value="1" id="report-supplier-invoice" className="form-control" />
                                 </div>
                             </div>
                             <div className="form-group">
                                 <label className="col-sm-3 control-label" htmlFor="report-item-in-date">Date Received: </label>
                                 <div className="col-sm-9">
                                    <input type="text" value="08/08/2017" id="report-item-in-date" className="form-control" />
                                 </div>
                             </div>
                             <div className="form-group">
                                 <label className="col-sm-3 control-label" htmlFor="report-item-in-wh">Warehouse: </label>
                                 <div className="col-sm-9">
                                    <input type="text" value="Canteen" id="report-item-in-wh" className="form-control" />
                                 </div>
                             </div>
                        </div>
                     </div>
                  </div>
               </div>
               <legend>Items</legend>
               <table className="table table-striped table-bordered table-responsive">
                  <thead>
                     <tr>
                        <th>Item Name</th>
                        <th>Unit Cost</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>555 Beef Loaf 150g</td>
                        <td>20.00</td>
                        <td>100</td>
                        <td>2000</td>
                     </tr>
                     <tr>
                        <td>555 Beef Loaf 150g</td>
                        <td>20.00</td>
                        <td>100</td>
                        <td>2000</td>
                     </tr>
                     <tr>
                        <td>555 Beef Loaf 150g</td>
                        <td>20.00</td>
                        <td>100</td>
                        <td>2000</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <button type="button" className="btn btn-default btn-primary" onClick={() => this.generatePDF()}>Print Report</button>
         </div>
      );
   }
}

export default App;