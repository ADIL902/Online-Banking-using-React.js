import React from "react";
import image1 from '../1.jpg';
import image2 from '../2.jpg';
import image3 from '../3.jpg';
import image4 from '../4.jpeg';
import image5 from '../5.png';
import image6 from '../6.jpg';
import image7 from '../7.jpg';
import image8 from '../8.jpg';
import image9 from '../9.jpg';
import image10 from '../10.jpg';
import image11 from '../11.jpeg';
import image12 from '../12.webp';



function Home() {

    return (
        <div><br/>
            <div className="row" >
              
                <div className="col-md-3">
                    <img src={image1} height={"200"} width={"100%"} ></img>
                </div>
                <div className="col-md-3">
                    <img src={image2} height={"200"} width={"100%"}></img>
                </div>
                <div className="col-md-3">
                    <img src={image3} height={"200"} width={"100%"}></img>
                </div>
                <div className="col-md-3">
                    <img src={image4} height={"200"} width={"100%"}></img>
                </div>
            </div><br/>
            <div className="row">
           
                <div className="col-md-3">
                    <img src={image5} height={"200"} width={"100%"}></img>
                </div>
                
                <div className="col-md-3">
                    <img src={image6}height={"200"} width={"100%"}></img>
                </div>
                <div className="col-md-3">
                    <img src={image7} height={"200"} width={"300"}></img>
                </div>
                <div className="col-md-3">
                    <img src={image8} height={"200"} width={"100%"}></img>
                </div>
            </div><br/>
            
            <div className="row">
           
                
          
                <div className="col-md-3">
                    <img src={image9} height={"200"} width={"100%"}></img>
                </div>
                <div className="col-md-3">
                    <img src={image10}height={"200"} width={"100%"}></img>
                </div>
                <div className="col-md-3">
                    <img src={image11} height={"200"} width={"100%"}></img>
                </div>
                <div className="col-md-3">
                    <img src={image12} height={"200"} width={"100%"}></img>
                </div>
            </div>


        </div>
    )
}
export default Home;