import axios from "axios";
import React, { useState } from "react";
function Balance()
{
    var[ac,setAc]=useState()
    var[p,setPin]=useState()

    var[Msg,setMsg]=useState();
    var getBalance=async ()=>{
        var res= await axios.get("http://localhost:3000/Account")
        var dt=res.data.filter(item=>item.acno==ac && item.Pin==p)
        if(dt.length>0)
        {
            var camt=parseInt(dt[0].Ammount)
            setMsg("Your Current Balance is " +camt)
            
            

        }
    }
    return(
        <div >
            <center style={{ "background": "lightgreen" }}><h1 className="display-3"> Balance Enquiery</h1><br />
              <h3>{Msg}</h3>  

                <hr />
            </center>
            <div className="row" style={{ "background": "aqua" }}>
                <div className="col-md-4"></div>
                <div className="col-md-4" ><br/>
                    <b>Enter your Account Number</b>
                    <input type="text" className="form-control" onInput={(e) => setAc(e.target.value)}></input><br />
                    <b>Enter your Pin Number</b>
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)}></input><br/>

                   
                    <div className="row">
                        <div className="col">

                            <button className="btn btn-success" onClick={() => getBalance()}>Balance Enquiery</button>
                        </div>
                    </div><br/><br/><br/><br/><br/><br/><br/>


                </div>

            </div>
        </div>


    )
}
export default Balance;