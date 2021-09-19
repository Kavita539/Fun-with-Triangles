let quizForm=document.querySelector(".quiz-form")
const outputEl=document.querySelector("#output")
const submitAnswerBtn=document.querySelector("#submit-answer-btn")
const quizContainer=document.querySelectorAll(".question-container")

let correctAns=["65°", "right angled", "Isosceles", "60°", "Scalene", "Yes", "60°", "No"];

quizForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let index=0;
    let score=0;
    let formResults=new FormData(quizForm)

    for(let eachEntry of formResults.values()){
        if(eachEntry===correctAns[index]){
            score++;
            quizContainer[index].style.backgroundColor='#82d482'
        }else{
            quizContainer[index].style.backgroundColor='#ffabab'
        }
        index++
    }
    
    outputEl.style.display='block';
    // outputEl.innerText=`Your total score is ${score}/8`;
    outputEl.innerText=`Your total score is ${score}/8\n\nThe Correct Answers are as given : 1)65°, 2)right angled, 3)Isosceles, 4)60°, 5)Scalene, 6)Yes, 7)60°, 8)No`
    submitAnswerBtn.style.display='none'
})


