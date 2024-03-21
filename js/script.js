// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan Han
// Created on: Mar 2024
// This file contains the JS functions for index.html
function CaculateToClick() {
  //input the element
  let unit = String(document.getElementById("get_unit").value)
  if (unit == "") {
    let unit = "cm"
  }
  let h = parseInt(document.getElementById("get_height").value)
  let b = parseInt(document.getElementById("get_base").value)
  //process
  let area = (h*b)/2
  //output
  document.getElementById("Result").innerHTML = 
  ("The area of a triangle with base " + b + unit + " and height " + h + unit + " is " + area + unit + "²")
}