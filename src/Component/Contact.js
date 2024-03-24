import React from "react";
function Contact(){
    return(
        <div className="row" style={{ "background": "aqua" }} ><center style={{ "background": "skyblue" }}><h1 className="display-3" > Contact Us:-</h1><hr/>
        <h1>Hi, Thank you so much for reaching us out.</h1></center><hr/>
            <div className="col-md-4" style={{ "background": "lightyellow" }}> 
            <p style={{"fontSize":"25px"}}><b> &emsp;  In case of any query, or suggestion &emsp;  &emsp;please contact us through the email. </b> </p>
            <img src="90.jpg" height={"320"} width={"400"}></img></div>
            <div className="col-md-5" style={{ "background": "pink" }}><br/><br/><br/>
                <center><h2>Email:- mohdadilbijnor64@gmail.com</h2><br/>
                <h2>Contact Number:- 9027639765</h2><br/>
                <h2>Address:- clocktower <hr/>Dheradun</h2></center>
                

               
                
            
            </div>

        </div>
    )
}
export default Contact;