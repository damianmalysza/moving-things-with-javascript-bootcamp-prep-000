const app = "I don't do much."

console.log("JS LOADED")

function moveDodgerLeft(){
  var leftNumbers=dodger.style.left.replace("px","")
  var left=parseInt(leftNumbers,10)
  
  if(left>0){
    dodger.style.left=`${left - 1}px`
  }
}

function moveDodgerRight(){
  var rightNumbers=dodger.style.right.replace("px","")
  var right = parseInt(rightNumbers,10)
  
  if 
}