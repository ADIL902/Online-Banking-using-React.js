import axios from "axios";
import React, { useState } from "react";
function Deposit() {

    var [ac, setAc] = useState()
    var [p, setPin] = useState()
    var [a, setAmt] = useState()

    var [Msg, setMsg] = useState();



    var getDeposit = async () => {
        var res = await axios.get("http://localhost:3000/Account")
        var dt = res.data.filter(item => item.acno == ac && item.Pin == p)
        if (dt.length > 0) {
            console.log("Login Successfully")
            var camt = parseInt(dt[0].Ammount)

            camt = camt + parseInt(a)
            var id = dt[0].id;
            var d = dt[0]
            d.Ammount = camt
            res = await axios.put(`http://localhost:3000/Account/${id}`, d)
            let date = new Date().toLocaleDateString("de-DE");
                var tr = {"acno":ac,"Ammount":a,"date":date,"type":"Deopsit"}
                res = await axios.post(`http://localhost:3000/Transation`, tr)
            setMsg("After Withdraw = " + a + "Ruppe" + "  Your Current Balance is =" + camt)


        }
        else
            setMsg("Invalid Account Or Pin")



    }

    return (
        <div >
            <center style={{ "background": "aqua" }}><h1 className="display-3">Deposit Ammount</h1><br />
                <h3>{Msg}</h3>

                <hr />
            </center>
            <div className="row" style={{ "background": "pink" }}>
                <div className="col-md-4"></div>
                <div className="col-md-5"><br/>
                    <b>Enter your Account Number</b>
                    <input type="text" className="form-control" onInput={(e) => setAc(e.target.value)}></input><br />
                    <b>Enter your Pin</b>
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)}></input>

                    <br />

                    <b>Enter your Ammount to Deposit</b>
                    <input type="text" className="form-control" onInput={(e) => setAmt(e.target.value)}></input>
                    <br /><br/>
                    <div className="row">
                        <div className="col">

                            <button className="btn btn-success" onClick={() => getDeposit()}>Deposit</button>
                        </div>
                    </div><br />


                </div>

            </div>
        </div>


    )
}
export default Deposit;