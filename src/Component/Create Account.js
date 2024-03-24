import axios from "axios";
import React, { useState } from "react";
function Create() {
    var [n, setFtName] = useState()
    var [l, setLName] = useState()
    var [f, setFName] = useState()
    var [m, setMName] = useState()
    var [e, setEmail] = useState()
    var [p, setPhone] = useState()
    var [g, setgender] = useState()
    var [c, setCountry] = useState()
    var [s, setState] = useState()
    var [ct, setCity] = useState()
    var [a, setAmount] = useState()
    var [pn, setPin] = useState()

    var [Msg, SetMsg] = useState();



    var Create_Account = async () => {
        var ac = "SBI"
        var res = await axios.get("http://localhost:3000/Account")
        var x = res.data.length
        if (x > 0) {
            x = x + 101
            ac = ac + x

        }
        else
            ac = "SBI101"

        var data = { "acno": ac, "Name": n, "LName": l, "FName": f, "MName": m, "Email": e, "Phone": p, "Gender": g, "Country": c, "State": s, "City": ct, "Ammount": a, "Pin": pn }
        var res = await axios.post("http://localhost:3000/Account", data)
        SetMsg("Account Open Successfully and your Account Number is " + ac)
    }

    return (
        <div style={{ "background": "pink" }} >
            <center style={{ "background": "aqua" }}><h1 className="display-3">Create Account</h1><br/></center>
            <hr />
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6" >
                    <h3>{Msg}</h3>
                    <div className="row">
                        <div className="col">
                            <b>Enter your First Name</b>
                            <input type="text" className="form-control" onInput={(e) => setFtName(e.target.value)}></input>
                        </div>
                        <div className="col">
                            <b>Enter your Last Name</b>
                            <input type="text" className="form-control" onInput={(e) => setLName(e.target.value)}></input>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col">
                            <b>Enter your Father Name</b>
                            <input type="text" className="form-control" onInput={(e) => setFName(e.target.value)}></input>
                        </div>
                        <div className="col">
                            <b>Enter your Mother Name</b>
                            <input type="text" className="form-control" onInput={(e) => setMName(e.target.value)}></input>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col">
                            <b>Enter your Email</b>
                            <input type="text" className="form-control" onInput={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="col">
                            <b>Enter your Phone Number</b>
                            <input type="text" className="form-control" onInput={(e) => setPhone(e.target.value)}></input>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col">
                            <b>Enter your gender</b>
                            <input type="text" className="form-control" onInput={(e) => setgender(e.target.value)}></input>
                        </div>

                    </div><br />
                    <div className="row">
                        <div className="col">
                            <b>Enter Country</b>
                            <input type="text" className="form-control" onInput={(e) => setCountry(e.target.value)}></input>
                        </div>
                        <div className="col">
                            <b>Enter State</b>
                            <input type="text" className="form-control" onInput={(e) => setState(e.target.value)}></input>
                        </div>

                        <div className="col">
                            <b>Enter City</b>
                            <input type="text" className="form-control" onInput={(e) => setCity(e.target.value)}></input>
                        </div>


                    </div><br />
                    <div className="row">
                        <div className="col">
                            <b>Enter Amount</b>
                            <input type="text" className="form-control" onInput={(e) => setAmount(e.target.value)}></input>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col">
                            <b>Enter Your Pin</b>
                            <input type="password" className="form-control" onInput={(e) => setPin(e.target.value)}></input>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col">

                            <button className="btn btn-success" onClick={() => Create_Account()}>Create_Account</button>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    )
}
export default Create;