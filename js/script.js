// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function defUnit() {
  let unit = document.getElementById("get_unit").value
  if (unit == "") {
    let unit = "cm"
  }
}

function CaculateToClick() {
  //input the element
  let h = int(document.getElementById("get_height").value)
  let b = int(document.getElementById("get_base").value)
  //process
  let area = (h*b)%2
  //output
  document.getElementById("result").innerHTML = 
  "The area of a triangle with base " + b + unit + "and height " + h + unit + " is " (h*b)%2 + unit + "²"
}