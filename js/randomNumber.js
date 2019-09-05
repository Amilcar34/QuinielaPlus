function setResultRandom(cantGrups){
    for (let index = 0; index < cantGrups; index++) {
        let resutl = new Set();
        while (resutl.size == 8) {
            resutl.add(Math.floor((Math.random() * 10) + 1));
        }
        document.getElementById("resultRandomDiv").innerText(resutl)
    }
}