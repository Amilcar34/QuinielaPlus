function setResultRandom(cantGrups){
    document.getElementById("resultRandomUl").innerHTML = "";
    for (let index = 0; index < cantGrups; index++) {
        let resutl = new Set();
        while (resutl.size != 8) {
            resutl.add(Math.floor((Math.random() * 10) + 1));
        }
        let resultValue = "";
        for (const element of resutl.entries()) 
            resultValue += element[0] + " - ";            
        
        let group = document.createTextNode(resultValue);
        let li = document.createElement('LI');
        li.appendChild(group);
        document.getElementById("resultRandomUl").appendChild(li);
    }
}
  var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };
