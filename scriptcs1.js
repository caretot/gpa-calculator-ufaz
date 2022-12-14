// Function for calculating grades
const calculate = () => {
   // Getting input from user into height variable.
   let math1 = document.querySelector("#math1").value;
   let math2 = document.querySelector("#math2").value;
   let mathfinal = document.querySelector("#mathfinal").value;

   let vibrations1 = document.querySelector("#vibrations1").value;
   let vibrations2 = document.querySelector("#vibrations2").value;
   let waves1 = document.querySelector("#waves1").value;
   let waves2 = document.querySelector("#waves2").value;
   let optics1 = document.querySelector("#optics1").value;
   let optics2 = document.querySelector("#optics2").value;
   let phylab = document.querySelector("#phylab").value;
   
   let ibw1 = document.querySelector("#ibw1").value;
   let ibw2 = document.querySelector("#ibw2").value;
   
   let fr1 = document.querySelector("#fr1").value;
   let fr2 = document.querySelector("#fr2").value;
   let frfinal = document.querySelector("#frfinal").value;
   
   let en1 = document.querySelector("#en1").value;
   let en2 = document.querySelector("#en2").value;
   let enfinal = document.querySelector("#enfinal").value;
   
   let dsa1 = document.querySelector("#dsa1").value;
   let dsa2 = document.querySelector("#dsa2").value;
   let dsafinal = document.querySelector("#dsafinal").value;

   let comparc1 = document.querySelector("#comparc1").value;
   let comparc2 = document.querySelector("#comparc2").value;
   let comparcfinal = document.querySelector("#comparcfinal").value;

   let datab1 = document.querySelector("#datab1").value;
   let datab2 = document.querySelector("#datab2").value;
   let databfinal = document.querySelector("#databfinal").value;




   let currentcoef =0;
   let currentgpa =0;
   let currenttotalgrades=0;
   const midterms = [math1,math2,mathfinal,
     vibrations1,vibrations2,waves1,waves2, optics1, optics2, phylab, 
     ibw1,ibw2,fr1,fr2,frfinal,en1,en2,enfinal,
     dsa1,dsa2,dsafinal, 
     comparc1,comparc2,comparcfinal,
     datab1,datab2,databfinal];
   const coefs = [1, 2, 3,
     0.33,0.66,0.33,0.66,0.33,0.66,3,
     1,1,0.5,0.75,0.75,0.5,0.75,0.75,
     1.8,1.8,2.4,
     0.5,1,1.5,
     0.3, 1.2, 1.5
  ];
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




  if(math1 == ""){
     math1=0;
  }
  if(math2 == ""){
     math2=0;
  }
  if(mathfinal == ""){
     mathfinal=0;
  }
  if(vibrations1 == ""){
     vibrations1=0;
  }
  if(vibrations2 == ""){
     vibrations2=0;
  }
  if(waves1 == ""){
     waves1=0;
  }
  if(waves2 == ""){
     waves2=0;
  }
  if(optics1 == ""){
     optics1=0;
  }
  if(optics2 == ""){
     optics2=0;
  }
  if(phylab == ""){
     phylab=0;
  }
  
  if(ibw1 == ""){
     ibw1=0;
  }
  if(ibw2 == ""){
     ibw2=0;
  }
  if(fr1 == ""){
     fr1=0;
  }
  if(fr2 == ""){
     fr2=0;
  }
  if(frfinal == ""){
     frfinal=0;
  }
  if(en1 == ""){
     en1=0;
  }
  if(en2 == ""){
     en2=0;
  }
  if(enfinal == ""){
     enfinal=0;
  }
  
  if(datab1 == ""){
     datab1=0;
  }
  if(datab2 == ""){
     datab2=0;
  }
  if(databfinal == ""){
     databfinal=0;
  }


  if(dsa1 == ""){
   dsa1=0;
}
if(dsa2 == ""){
   dsa2=0;
}

if(dsafinal == ""){
   dsafinal=0;
}
if(comparc1 == ""){
   comparc1=0;
}

if(comparc2 == ""){
   comparc2=0;
}
if(comparcfinal == ""){
   comparcfinal=0;
} 





   let grades = "";

   // Input is string so typecasting is necessary. */

   let mathave =
   (parseFloat(math1)*1 +
   parseFloat(math2)*2 +
   parseFloat(mathfinal)*3);   

   let physicsave = 
   (parseFloat(vibrations1)*1/3 +
   parseFloat(vibrations2)*2/3 +
   parseFloat(waves1)*1/3 +
   parseFloat(waves2)*2/3 +
   parseFloat(optics1)*1/3 +
   parseFloat(optics2)*2/3 +
   parseFloat(phylab)*3);

   let ibwave = 
   (parseFloat(ibw1)*1 +
   parseFloat(ibw2)*1);

   let frave = 
   (parseFloat(fr1)*0.5 +
   parseFloat(fr2)*0.75 +
   parseFloat(frfinal)*0.75);

   let enave = 
   (parseFloat(en1)*0.5 +
   parseFloat(en2)*0.75 +
   parseFloat(enfinal)*0.75);

   let dsaave = 
   (parseFloat(dsa1)*1.8 +
   parseFloat(dsa2)*1.8 +
   parseFloat(dsafinal)*2.4);

   let comparcave = 
   (parseFloat(comparc1)*0.5 +
   parseFloat(comparc2)*1 +
   parseFloat(comparcfinal)*1.5);

   let databave = 
   (parseFloat(datab1)*0.3 +
   parseFloat(datab2)*1.2 +
   parseFloat(databfinal)*1.5);







  let totalgrades = (mathave+physicsave+dsaave+comparcave+databave+frave+enave+ibwave)/30;

   // Checking the condition for the providing the
   // grade to student based on percentage
   let percentage = (totalgrades / 20) * 100;  
   let gpa = totalgrades;
  
   if (gpa <= 20 && gpa >= 13.5) {
      grades = "A";
   } else if (gpa <= 13.4999999 && gpa >= 12) {
      grades = "B";
   } else if (gpa <= 11.99999 && gpa >= 10) {
      grades = "C";
   } else {
      grades = "F";
   }
   // Checking the values are empty if empty than
   // show please fill them
   if (5>10 
   ) { document.querySelector("#showdata").innerHTML = "Please enter all the fields";
   } else {
      // Checking the condition for the fail and pass
      let gpa = (percentage * 0.2);
      gpa = gpa.toFixed(4);
      percentage = percentage.toFixed(2);
      if (percentage >= 0) {
      document.querySelector(
         "#showdata"
      ).innerHTML =
         `<button
         id="resu"
         style = "border-radius:10px;border-color:black;color:black;
        background-image: linear-gradient(to right bottom,rgb(110, 110, 110),rgb(148, 148, 148));"
        >   
        <h1><b>GPA : ${gpa}<sub style="color:rgb(201, 201, 201);font-size: small;">${grades}</sub></b></h1><br>
        <h3><b>PG : ${percentage}%</b></h3><br>
        Math - ${(mathave/6).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((mathave/6)/0.2).toFixed(1)}%</sub> <br>
        Physics - ${(physicsave/6).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((physicsave/6)/0.2).toFixed(1)}%</sub> <br>
        French - ${(frave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((frave/2)/0.2).toFixed(1)}%</sub> <br>
        English - ${(enave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((enave/2)/0.2).toFixed(1)}%</sub> <br>
        IBW - ${(ibwave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((ibwave/2)/0.2).toFixed(1)}%</sub> <br>
        Data S.A. - ${(dsaave/6).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((dsaave/6)/0.2).toFixed(1)}%</sub> <br>
        Comp Arc - ${(comparcave/3).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((comparcave/3)/0.2).toFixed(1)}%</sub> <br>
        Databases - ${(databave/3).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((databave/3)/0.2).toFixed(1)}%</sub> <br>
        ----------- <br>
         Current Av - ${(currentgpa*0.2).toFixed(3)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${(currentgpa).toFixed(2)}%</sub> <br>
          
        <br><br> 
        </button>
         `;
      } 
   }
};