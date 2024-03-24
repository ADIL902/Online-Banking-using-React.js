import axios from "axios";
import React, { useState } from "react";
function Pin_Change()
{    var [ac,setAc]=useState()

    var [p,setPin]=useState()
    var [np,setNPin]=useState()
    
var [Msg,setMsg]=useState();
    var getPinChange=async ()=>{
      
        var res=await axios.get("http://localhost:3000/Account")
        var dt=res.data.filter(item=>item.acno==ac && item.Pin==p)
        if(dt.length>0)
        {
            var id=dt[0].id;
            var d=dt[0];
            d.Pin=np
            res=await axios.put(`http://localhost:3000/Account/${id}`,d)
        setMsg("Pin Changed Succefully")    
    } 
    else
    setMsg(" Invalid Account or Pin")

    }
    return(
        <div >
            <center style={{ "background": "pink" }}><h1 className="display-3"> Pin Change</h1><br />
              <h3>{Msg}</h3>  

                <hr />
            </center>
            <div className="row" style={{ "background": "aqua" }}>
                <div className="col-md-4"></div>
                <div className="col-md-4" ><br/>
                    <b>Enter your Account Number</b>
                    <input type="text" className="form-control" onInput={(e) => setAc(e.target.value)}></input><br />
                    <b>Enter your Old Pin Number</b>
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)}></input><br/>
                    <b>Ente Your New Pin Number</b>
                    <input type="text" className="form-control" onInput={(e) => setNPin(e.target.value)}></input><br/>

                   
                    <div className="row">
                        <div className="col">

                            <button className="btn btn-success" onClick={() => getPinChange()}>Change pin</button>
                        </div>
                    </div><br/><br/><br/><br/><br/><br/><br/>


                </div>

            </div>
        </div>


    )
}
export default Pin_Change;