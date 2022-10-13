const navOne = document.getElementById('navOne')
fetch('components/headerOne.html')
    .then(res=>res.text())
    .then(data=>{
        navOne.innerHTML=data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    });

const navTwo = document.getElementById('navTwo')
fetch('components/headerTwo.html')
    .then(res=>res.text())
    .then(data=>{
        navTwo.innerHTML=data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    });

const navThree = document.getElementById('navThree')
fetch('components/headerThree.html')
    .then(res=>res.text())
    .then(data=>{
        navThree.innerHTML=data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    });


function addElement() {


}

