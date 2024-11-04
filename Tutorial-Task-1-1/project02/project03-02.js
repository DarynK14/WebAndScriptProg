/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Daryn King
      Date: Oct. 10, 2024

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0]="International Space Station fourth expansion []";
captions[1]="Assembling the Internationla Space Station [1998]";
captions[2]="The Atlantis docks with the ISS [2001]";
captions[3]="The Atlantis approaches the ISS [2000]";
captions[4]="The Atlantis approaches the ISS [2000]";
captions[5]="International Space Station over Earth [2002]";
captions[6]="The International SPace Station first expansion [2002]";
captions[7]="Hurricane Ivan from the ISS [2008]";
captions[8]="The Soyuz spacecraft approaches the ISS [2005]";
captions[9]="The International Space Station from above [2006]";
captions[10]="Maneuvering in space with the Canadarm2 [2006]";
captions[11]="The international Space Station second expansion [2006]";
captions[12]="The international Space Station third expansion [2007]";
captions[13]="The ISS over the Ionian Sea [2007]";

let htmlCode = "";
for(let i=0; i<captions.length; i++) {
      htmlCode += "<figure>";
      htmlCode += "<img alt='' src='slide" + i + ".jpg' />";
      htmlCode += "<figcaption>" + captions[i] + "</figcaption>";
      htmlCode += "</figure>";
}

document.getElementById("gallery").innerHTML = htmlCode;