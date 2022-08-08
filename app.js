var id=999;
let bod=document.getElementsByTagName("body");
let sec=document.getElementsByTagName("section");

function  constructor(Name,DEPartment,level,imgUrl){
this.employeeID =++id;
this.fullName =Name;
this.department =DEPartment;
this.level=level;
this.imgUrl= imgUrl;
this.netSalary=0;
this.uniqeID=function(c){id++;
    return this.employeeID=++c;};
this.salary=function(){
    if (this.level==="Senior"){
    var max=2000; var min=1500;}

    if(this.level="Mid-Senior"){var max=1500;var min =1000;}
    
    else{var max=1000;var min =500;}

        let x= Math.floor((Math.random()*(max-min)+min));
        this.netSalary= x -7.2;
        return x;
    }


}

constructor.prototype.print=function()
{

let pel=document.createElement("p");
let img=document.createElement("img");
let di=document.createElement("div");
img.src=this.imgUrl;
bod[0].appendChild(img);
pel.innerHTML=`Name: ${this.fullName}<br> ID :${this.employeeID}<br>Department :${this.department}<br>  Level :${this.level}`;
bod[0].appendChild(pel);

img.style.width="300px"
img.style.display="inline"

}



// object 1
let obj1=new constructor("Ghazi Samer","Administration","Senior","./Ghazi.jpg");
console.log("-----------------------------");
let obj2=new constructor("Lana Ali","Finance","Senior","./Lana.jpg");
console.log("-----------------------------")

let obj3=new constructor("Tamara Ayoub ","Marketing ","Senior","./Tamara.jpg");
console.log("-----------------------------")

let obj4=new constructor("Safi Walid","Adminstration ","Mid-Senior","./Safi.jpg");
console.log("-----------------------------")

let obj5=new constructor("Omar Zaid ","Development ","Senior","./Omar.jpg");
console.log("-----------------------------")

let obj6=new constructor("Rana Saleh ","Development ","Junior","./Rana.jpg");
console.log("-----------------------------")

let obj7=new constructor("Hadi Ahmad ","Finance ","Mid-Senior","./Hadi.jpg");


obj1.print();
obj2.print();
obj3.print();
obj4.print();
obj5.print();
obj6.print();
obj7.print();

////////task 10

