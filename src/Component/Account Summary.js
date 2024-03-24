import axios from "axios";
import React, { useEffect, useState } from "react";
function Account_summary() {
    var [ac, setAc] = useState()
    var [p, setPin] = useState()
    var [trans, setTrans] = useState()
    var [Msg, setMsg] = useState();
    var[st,setSt]=useState()



    var getSummary = async () => {
        var res = await axios.get("http://localhost:3000/Account")
        var dt = res.data.filter(item => item.acno == ac && item.Pin == p)
        if (dt.length > 0) 
        {
            setMsg("")
            var res1 = await axios.get("http://localhost:3000/Transation")
            var dt = res1.data.filter(item => item.acno == ac)
            setTrans(dt)
           setSt(true)
            
    }
    else
    setMsg("Invalid Account or Pin")
    }
   

    return (
        <div >
            <center style={{ "background": "lightgreen" }}><h1 className="display-3"> Account summary</h1><br />
                <h3>{Msg}</h3>

                <hr />
            </center>
            <div className="row" style={{ "background": "aqua" }}>
                <div className="col-md-3"></div>
                <div className="col-md-4" ><br />
                
                    <b>Enter your Account Number</b>
                    <input type="text" className="form-control" onInput={(e) => setAc(e.target.value)}></input><br />
                    <b>Enter your Pin Number</b>
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)}></input><br />


                    

                            <button className="btn btn-success" onClick={() => getSummary()}>Account summary</button>
                            </div>
                      

                        <div className="col-md-5">
                            {

                            st?             
                                     <table className="table table-bordered table-striped table-hover table-dark">
                                <tbody>
                                    <tr>
                                        <td>ID</td>
                                        <td>Account</td>
                                        <td>Ammount</td>
                                        <td>Date</td>
                                        <td>Type</td>
                                    </tr>
                                    {
                                      trans &&  trans.map(row=>
                                        <tr>
                                            <td>{row.id}</td>
                                            <td>{row.acno}</td>
                                            <td>{row.Ammount}</td>
                                            <td>{row.date}</td>
                                            <td>{row.type}</td>
                                        </tr>
                                            )
                                    }
                                   
                                </tbody>
                            </table>
                            :null
                                }
                        </div>
                    </div>

                </div>

          
     


    )
}
export default Account_summary;