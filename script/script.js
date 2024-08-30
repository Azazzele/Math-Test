

const btn = document.getElementById('finish');
let  result = 0;

btn.addEventListener("click", chekTest);


function chekTest() {
    const q1 = document.getElementById("Q1").value;
    const q2 = document.getElementById("Q2").value;
    const q3 = document.getElementById("Q3").value;
    const q4 = document.getElementById("Q4").value;
    const q5 = document.getElementById("Q5").value;

    if (q1 === "4") {
        result ++
    }
    if (q2 === "5") {
        result ++
    }
    if (q3 === "6") {
        result ++
    }
    if (q4 === "7") {
        result ++
    }
    if (q5 === "8") {
        result ++
    }
    alert("Ваш результат " + result)
    
    
}