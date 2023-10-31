 function calculateArea(radius) {

	  if(radius > 0)
	  {
         let radiusofCircle = 3.14*(radius**2).toFixed(2);
		  return "The area of the circle with radius " + radius + " is " + radiusofCircle; 
	  }
	 else{  
          return "Enter a positive number";
	 }
    }
 let radius = parseFloat(prompt("Enter the radius of the circle:"));
 

alert(calculateArea(radius));  
    
calculateArea(radius);   

