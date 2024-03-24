import axios from "axios";
import React, { useState } from "react";
function Fund_Transfer () {


    var [ac,setAc]=useState()
    var [p,setPin]=useState()
    var [tac,setTac]=useState()
    var [a,setAmt]=useState()
    
var [Msg,setMsg]=useState();
    var getFund_Transfer=async ()=>{
      
        var res=await axios.get("http://localhost:3000/Account")
        var dt=res.data.filter(item=>item.acno==ac && item.Pin==p)
        if(dt.length>0)
        {
        var camt=parseInt(dt[0].Ammount)
        if(camt>=parseInt(a))
        {
    var dt1=res.data.filter(item=>item.acno==tac)
    if(dt1.length>0)
    {
        var tamt=parseInt(dt1[0].Ammount)
        camt =camt-parseInt(a)
        tamt=tamt+parseInt(a)
        var id1=dt[0].id
        var id2=dt1[0].id
        var d1=dt[0]
        var d2=dt1[0]
        d1.Ammount=camt
        d2.Ammount=tamt
        res=await axios.put(`http://localhost:3000/Account/${id1}`,d1)
        res=await axios.put(`http://localhost:3000/Account/${id2}`,d2)
        let date = new Date().toLocaleDateString("de-DE");
        var tr = {"acno":ac,"Ammount":a,"date":date,"type":"Transfer"}
        var tr = {"acno":tac,"Ammount":a,"date":date,"type":"Recived"}
        res = await axios.post(`http://localhost:3000/Transation`, tr)
        setMsg("Transaction Successfully  "+a+" Now Your Current Balance is = "+camt)
        
    }
    else
    setMsg("Invalid Benificary Account")            
        }
        else
        setMsg("Insufficient balnce")
    } 
    else
    setMsg(" Invalid Account or Pin")
       

       
    }




    return (
        <div >
            <center style={{ "background": "lightgreen" }}><h1 className="display-3">Fund Transfer</h1><br />
              <h3>{Msg}</h3>  

                <hr />
            </center>
            <div className="row" style={{ "background": "lightyellow" }}>
                <div className="col-md-4"></div>
                <div className="col-md-5">
                    <b>Enter your Account Number</b>
                    <input type="text" className="form-control" onInput={(e) => setAc(e.target.value)}></input><br />
                    <b>Enter your Pin Number</b>
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)}></input>

                    <br />

                    <b>Enter Account Number to Transfer The Ammount</b>
                    <input type="text" className="form-control" onInput={(e) => setTac(e.target.value)}></input>
                    <br />

                    <b>Enter Ammount to Transfer</b>
                    <input type="text" className="form-control" onInput={(e) => setAmt(e.target.value)}  ></input><br/>
                    <div className="row">
                        <div className="col">

                            <button className="btn btn-success" onClick={() => getFund_Transfer()}>Fund Transfer</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>


    )
}
export default Fund_Transfer;