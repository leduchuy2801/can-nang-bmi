var height1 = document.getElementById('idheight');
var weight1 = document.getElementById('idweight');
var cal = document.getElementById('idcal');


 function calculate(height, weight) {
         if(height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
         alert('No caculate');
         }else{
         height = height/100;
         let bmi = weight/Math.pow(height, 2);
         return bmi;
  }

}

cal.onclick = function result() {
   
    console.log("onclick");
    var height = height1.value;
    var weight = weight1.value;
    var bmi =  calculate(height, weight);
    if (bmi < 18.0){
        alert('Underweight');
    }else if (bmi < 25.0){
        alert('Normal');
    }else if (bmi < 30.0){
        alert('Overweight');
    }else{
        alert('Obese');
    }
}
