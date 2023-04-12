
function calculateGPA() {
    // Get the input values
    let mathCC1 = parseFloat(document.getElementById("math-cc1").value);
    let mathCC2 = parseFloat(document.getElementById("math-cc2").value);
    let mathCC3 = parseFloat(document.getElementById("math-cc3").value);

    let phyCC1 = parseFloat(document.getElementById("phy-cc1").value);
    let phyCC2 = parseFloat(document.getElementById("phy-cc2").value);
    let phyCC3 = parseFloat(document.getElementById("phy-cc3").value);
    
    let frCC1 = parseFloat(document.getElementById("fr-cc1").value);
    let frCC2 = parseFloat(document.getElementById("fr-cc2").value);
    let frCC3 = parseFloat(document.getElementById("fr-cc3").value);

    let enCC1 = parseFloat(document.getElementById("en-cc1").value);
    let enCC2 = parseFloat(document.getElementById("en-cc2").value);
    let enCC3 = parseFloat(document.getElementById("en-cc3").value);

    let bsCC1 = parseFloat(document.getElementById("bs-cc1").value);
    let bsCC2 = parseFloat(document.getElementById("bs-cc2").value);



    let aomCC1 = parseFloat(document.getElementById("aom-cc1").value);
    let aomCC2 = parseFloat(document.getElementById("aom-cc2").value);

    let tomCC1 = parseFloat(document.getElementById("tom-cc1").value);
    let tomCC2 = parseFloat(document.getElementById("tom-cc2").value);

    let chemlabCC1 = parseFloat(document.getElementById("chemlab-cc1").value);
    let chemlabCC2 = parseFloat(document.getElementById("chemlab-cc2").value);
    


    let geoCC1 = parseFloat(document.getElementById("geo-cc1").value);
    let geoCC2 = parseFloat(document.getElementById("geo-cc2").value);

    let petCC1 = parseFloat(document.getElementById("pet-cc1").value);
    let petCC2 = parseFloat(document.getElementById("pet-cc2").value);











    let currentcoef =0;
    let currentgpa =0;
    let currenttotalgrades=0;
    const midterms = [mathCC1, mathCC2, mathCC3, phyCC1, phyCC2, phyCC3, frCC1, frCC2, frCC3, enCC1, enCC2, enCC3, bsCC1, bsCC2, aomCC1, aomCC2, tomCC1, tomCC2, chemlabCC1, chemlabCC2, geoCC1, geoCC2, petCC1, petCC2];
    const coefs = [2, 1, 3, 1, 2, 3, 0.5, 0.75, 0.75, 0.5, 0.75, 0.75, 1, 1, 0.5, 1.25, 0.5, 1.25, 1, 1, 2, 2, 1, 1];
    for (let i = 0; i < midterms.length; i++) {
       if(parseFloat(midterms[i])>-1){
          currentcoef = currentcoef + parseFloat(coefs[i]);
          currenttotalgrades =currenttotalgrades+ parseFloat(midterms[i])*parseFloat(coefs[i]);
       }
     };
     if(currentcoef==0){
      currentgpa = 0
     }else{
      currentgpa = (currenttotalgrades) / (currentcoef) ;
 
     }
     currentgpa = currentgpa/0.2;
 
 
 
 
 
 
 
 
 
 
 
   if(isNaN(mathCC1)){
      mathCC1=0;
   }
   if(isNaN(mathCC2)){
      mathCC2=0;
   }
   if(isNaN(mathCC3)){
      mathCC3=0;
   }
   if(isNaN(phyCC1)){
      phyCC1=0;
   }
   if(isNaN(phyCC2)){
      phyCC2=0;
   }
   if(isNaN(phyCC3)){
      phyCC3=0;
   }
   if(isNaN(frCC1)){
      frCC1=0;
   }
   if(isNaN(frCC2)){
      frCC2=0;
   }
   if(isNaN(frCC3)){
      frCC3=0;
   }
   if(isNaN(enCC1)){
      enCC1=0;
   }
   if(isNaN(enCC2)){
      enCC2=0;
   }
   if(isNaN(enCC3)){
      enCC3=0;
   }
   if(isNaN(bsCC1)){
      bsCC1=0;
   }
   if(isNaN(bsCC2)){
      bsCC2=0;
   }


   if(isNaN(aomCC1)){
      aomCC1=0;
   }
   if(isNaN(aomCC2)){
      aomCC2=0;
   }
   if(isNaN(tomCC1)){
      tomCC1=0;
   }
   if(isNaN(tomCC2)){
      tomCC2=0;
   }
   if(isNaN(chemlabCC1)){
      chemlabCC1=0;
   }
   if(isNaN(chemlabCC2)){
      chemlabCC2=0;
   }
   if(isNaN(geoCC1)){
      geoCC1=0;
   }
   if(isNaN(geoCC2)){
      geoCC2=0;
   }
   if(isNaN(petCC1)){
      petCC1=0;
   }
   if(isNaN(petCC2)){
      petCC2=0;
   }

 
 
 
 
 






















   let grades = "";


    // Calculate the GPA
    let totalCredits = 30; // Total credits of all courses
    let mathGPA = ((mathCC1 * 2) + (mathCC2 * 1) + (mathCC3 * 3)) / 6;
    let phyGPA = ((phyCC1 * 1) + (phyCC2 * 2) + (phyCC3 * 3)) / 6;
    let frGPA = ((frCC1 * 0.5) + (frCC2 * 0.75) + (frCC3 * 0.75)) / 2;
    let enGPA = ((enCC1 * 0.5) + (enCC2 * 0.75) + (enCC3 * 0.75)) / 2;
    let bsGPA = ((bsCC1 * 1) + (bsCC2 * 1)) / 2;
    
    let aomGPA = ((aomCC1 * 0.75) + (aomCC2 * 1.25)) / 2;
    let tomGPA = ((tomCC1 * 0.75) + (tomCC2 * 1.25)) / 2;
    let chemlabGPA = ((chemlabCC1 * 1) + (chemlabCC2 * 1)) / 2;

    let geoGPA = ((geoCC1 * 2) + (geoCC2 * 2)) / 4;

    let petGPA = ((petCC1 * 1) + (petCC2 * 1)) / 2;

    let chemGPA = (((aomCC1 * 0.75) + (aomCC2 * 1.25))+((tomCC1 * 0.75) + (tomCC2 * 1.25))+((chemlabCC1 * 1) + (chemlabCC2 * 1)))/6;





    let overallGPA = ((mathGPA * 6) + (phyGPA * 6) + (frGPA * 2) + (enGPA * 2) + (bsGPA * 2) + (aomGPA * 2) + (tomGPA * 2) + (chemlabGPA * 2) + (geoGPA * 4) + (petGPA * 2)) / totalCredits; // Overall GPA

    
       // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (overallGPA / 20) * 100;  
    let gpa = overallGPA;
   
    if (gpa <= 30 && gpa >= 13.5) {
       grades = "A";
    } else if (gpa <= 13.4999999 && gpa >= 12) {
       grades = "B";
    } else if (gpa <= 11.99999 && gpa >= 10) {
       grades = "C";
    } else {
       grades = "F";
    }






    if (currentgpa*0.2 >= 10) {
        document.getElementById("resultcolor").style.backgroundColor = "rgb(53, 76, 53)";
        document.getElementById("resultcolor").style.color = "white";
      } else {
        document.getElementById("resultcolor").style.backgroundColor = "rgb(95, 22, 22)";
        document.getElementById("resultcolor").style.color = "black";
      }
      


    // Display the GPA
    document.getElementById("gpa").innerHTML = overallGPA.toFixed(4);
    document.getElementById("percentage").innerHTML = percentage.toFixed(2);

    document.getElementById("cgpa").innerHTML = (currentgpa*0.2).toFixed(4);
    document.getElementById("cpercentage").innerHTML = (currentgpa).toFixed(2);
    


    document.getElementById("math").innerHTML = mathGPA.toFixed(2);
    document.getElementById("mathp").innerHTML = (mathGPA/0.2).toFixed(1);

    document.getElementById("phy").innerHTML = phyGPA.toFixed(2);
    document.getElementById("phyp").innerHTML = (phyGPA/0.2).toFixed(1);

    document.getElementById("fr").innerHTML = frGPA.toFixed(2);
    document.getElementById("frp").innerHTML = (frGPA/0.2).toFixed(1);

    document.getElementById("en").innerHTML = enGPA.toFixed(2);
    document.getElementById("enp").innerHTML = (enGPA/0.2).toFixed(1);

    document.getElementById("bs").innerHTML = bsGPA.toFixed(2);
    document.getElementById("bsp").innerHTML = (bsGPA/0.2).toFixed(1);

    document.getElementById("chem").innerHTML = chemGPA.toFixed(2);
    document.getElementById("chemp").innerHTML = (chemGPA/0.2).toFixed(1);

    document.getElementById("aom").innerHTML = aomGPA.toFixed(2);
    document.getElementById("aomp").innerHTML = (aomGPA/0.2).toFixed(1);

    document.getElementById("tom").innerHTML = tomGPA.toFixed(2);
    document.getElementById("tomp").innerHTML = (tomGPA/0.2).toFixed(1);

    document.getElementById("chemlab").innerHTML = chemlabGPA.toFixed(2);
    document.getElementById("chemlabp").innerHTML = (chemlabGPA/0.2).toFixed(1);

    document.getElementById("geo").innerHTML = geoGPA.toFixed(2);
    document.getElementById("geop").innerHTML = (geoGPA/0.2).toFixed(1);

    document.getElementById("pet").innerHTML = petGPA.toFixed(2);
    document.getElementById("petp").innerHTML = (petGPA/0.2).toFixed(1);
}

window.onload = function() {
    calculateGPA();
  };