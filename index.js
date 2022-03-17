function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // ******* challenge 1 *********

  height = height / 100; // convert cm to m
  let BMI = (weight / height^2);
  alert(BMI);

  // ******* challenge 2 *********

  if ( BMI < 18.5 ) {
    alert("Underweight");
  }

  else if ( 18.5 < BMI < 24.9)
   {alert("Healthy Weight");}

   else if ( 25.0 < BMI < 29.9)
   {alert("Overweight");}

else { 
  alert("Above Obesity");
}

  // ******* challenge 3 *********

  if ( 19 <= age <= 24 && 19 < BMI < 24 ){
    alert ( "Youre Healthy");
  }
  else if ( 25 <=  age <=  34 && 20 < BMI < 25)
   {alert("Youre Healthy");}

   else if ( 35 <=  age <=  44 && 21 < BMI < 26)
   {alert("Youre Healthy");}

   else if ( 45 <=  age <=  54 && 22 < BMI < 27)
   {alert("Youre Healthy");}

   else if ( 55 <=  age <=  64 && 23 < BMI < 28)
   {alert("Youre Healthy");}

else { 
  alert("Not Healthy");
}

}
