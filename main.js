let yosh=prompt("Yoshing nechida?");
if (yosh>15){
    alert("true")
}
else{
    let otaOna=prompt("Ota-onang bilan keldingmi? (ha/yo'q)");
    if (otaOna!="ha"){alert("false");}else  alert("true");
}


let arr=[23, 7,2 ,3 ];
arr.push(prompt("Massivga element qo'shing"));
alert(arr);

let ism = [ prompt("Ismingiz nima?"),prompt("Familyangiz nima?")];
let ismFam=(ism.join(" "));


let holat =prompt("Holat qanday? (yaxshi/yomon)")
let yaxYom=(holat=="yaxshi")? "Ha zo'r":"Yaxshi emas"
alert(yaxYom);

let strng =prompt("string kirgizing");
alert(((strng.length)%2==0)? true:false);

let daraja=prompt("1-sonni kiriting");
let sonDar=prompt("2-sonni kiriting");
alert(sonDar**daraja);

let mas =[3,5,6,7,8]
alert(mas[mas.length-1]);

let yil=prompt("Yilni kiriting?");
if (!(yil%4==0)){alert("Kabisa emas")}
else {
    if (yil%100==0){
        if (yil%400==0) alert("KAbisa yili");
        else alert("Kabisa emas");
    }else alert("KAbisa yili");
}



  let boshXarf=prompt("So'z kiriting");
  alert(boshXarf.substring(1));


let boll= +prompt("Boolen qiymat kiriting (1/0)");
alert(!boll)

let toqJuft=prompt("Sonni kiriting");
if (toqJuft % 2 == 0) {
    alert("juft");
  } else {
    alert("toq");
  }


let qavat=prompt("Qavatlar sonini kiriting?");
let jami=0;
for (let i=1;i<=qavat;i++){
    jami=jami+2**i-1
}
alert(jami);

let mssv=[1,2,3,4,5,6]
alert(mssv.join(""))

let mas1=[1,2,3,4,5];
let mas2=[6,7,8,9,0];
alert(mas1.concat(mas2));
  

let masv=[1,2,3,4,5,6,7,8,9,0];
alert(masv.indexOf(5));
alert(masv[5]);

let kub=prompt("Kub qatorini kiriting");
alert((kub**2)*6)

