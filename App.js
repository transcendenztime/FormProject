"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import FormComponentSmall from "./components/FormComponentSmall";

import FormComponent from './components/FormComponent';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render(
    <div><FormComponent /><FormComponentSmall/> </div>
, document.getElementById('container') );
