import React from 'react';
import loadingImag from "../../assets/loadingIcon.gif";
import "./Loading.css";

export default function Loading (){
    return <div id="loading-container" data-testid="loading-container">
        <img src={loadingImag} alt="loadingImage" />
    </div>
}