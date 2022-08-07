'use strict'
var id=999;

function  constructor(Name,DEPartment,level,imgUrl){
this.employeeID =0;
this.fullName =Name;
this.department =DEPartment;
this.level=level;
this.imgUrl= imgUrl;
this.netSalary=0;
this.uniqeID=function(c){id++;
    return this.employeeID=++c;};
this.salary=function(){
    if (this.level==="Senior"){
    let max=2000; let min=1500;}

    else if(this.level="Mid-Senior"){let max=1500;let min =1000;}
    
    else{let max=1000;let min =500;}

        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    }
 
    
    
console.log(`Employee1 name :${this.fullName}`);
console.log(`Department:${this.department}`);

console.log(`Employee1 salary:${this.salary()}`);

}

// object 1
new constructor("Ghazi Samer","Administration","Senior","https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.insider.com%2F61f14a0ce996470011907119%3Fwidth%3D600%26format%3Djpeg%26auto%3Dwebp&imgrefurl=https%3A%2F%2Fwww.insider.com%2Fpeople&tbnid=eeWpc1y5C9-G8M&vet=12ahUKEwjpubDi17T5AhWzwgIHHaWPAeUQMyggegUIARDuAQ..i&docid=vSedF8Qlcz6WKM&w=600&h=450&q=people&ved=2ahUKEwjpubDi17T5AhWzwgIHHaWPAeUQMyggegUIARDuAQ");
console.log("-----------------------------")
new constructor("Lana Ali","Finance","Senior","https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.bangkokpost.com%2Fmedia%2Fcontent%2F20200619%2Fc1_1937552_200619122619.jpg&imgrefurl=https%3A%2F%2Fwww.bangkokpost.com%2Flife%2Fsocial-and-lifestyle%2F1937552%2Fof-the-people-for-the-people-and-by-the-people&tbnid=ZMMtk0exhSuKyM&vet=12ahUKEwjpubDi17T5AhWzwgIHHaWPAeUQMygpegUIARCBAg..i&docid=P-1jeEDXXy1CbM&w=1500&h=1000&q=people&ved=2ahUKEwjpubDi17T5AhWzwgIHHaWPAeUQMygpegUIARCBAg");
console.log("-----------------------------")

new constructor("Tamara Ayoub ","Marketing ","Senior","https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.cbc.ca%2F1.6300677.1640886863!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fdaisy-warriner-24.jpg&imgrefurl=https%3A%2F%2Fwww.cbc.ca%2Fnews%2Fcanada%2Ftoronto%2Fhomeless-deaths-toronto-2021-1.6300513&tbnid=tXvWUd16LlSRBM&vet=10CLEBEDMouAFqFwoTCIDo5LfZtPkCFQAAAAAdAAAAABAC..i&docid=Pj9PCNky8XVYcM&w=780&h=439&q=people&ved=0CLEBEDMouAFqFwoTCIDo5LfZtPkCFQAAAAAdAAAAABAC");
console.log("-----------------------------")

new constructor("Safi Walid","Adminstration ","Mid-Senior","https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tubefilter.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fdobrik-people.jpg&imgrefurl=https%3A%2F%2Fwww.tubefilter.com%2F2019%2F11%2F14%2Fdavid-dobrik-peoples-sexiest-man-alive-peoples-choice%2F&tbnid=1pbf042In38asM&vet=10CI8BEDMojwJqFwoTCIDo5LfZtPkCFQAAAAAdAAAAABAD..i&docid=wj86io6EHfhqyM&w=1140&h=700&q=people&ved=0CI8BEDMojwJqFwoTCIDo5LfZtPkCFQAAAAAdAAAAABAD");
console.log("-----------------------------")

new constructor("Omar Zaid ","Development ","Senior","https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2379004%2Fpexels-photo-2379004.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-italo-melo-2379004.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fman%2F&tbnid=8liA1E1ilU-roM&vet=12ahUKEwjK0pWo97T5AhXHN-wKHVj-DiIQMygFegUIARDjAQ..i&docid=siXBgr-E-CQ1BM&w=1987&h=3000&q=man&ved=2ahUKEwjK0pWo97T5AhXHN-wKHVj-DiIQMygFegUIARDjAQ");
console.log("-----------------------------")

new constructor("Rana Saleh ","Development ","Junior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwsneR6mSUCYeCsCaVCHGFNacT6lWhWDc4w&usqp=CAU");
console.log("-----------------------------")

new constructor("Hadi Ahmad ","Finance ","Mid-Senior","https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fhappy-man&tbnid=7ySyF6MQSZW2tM&vet=12ahUKEwjK0pWo97T5AhXHN-wKHVj-DiIQMygAegUIARDXAQ..i&docid=H2EbKgaGt1m0lM&w=2000&h=1333&q=man&ved=2ahUKEwjK0pWo97T5AhXHN-wKHVj-DiIQMygAegUIARDXAQ");
