console.log('this is quiz app project');
const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let questionText=document.getElementById('questionText');
let answer=document.getElementsByClassName('answer');
let a_ans=document.getElementById('a_ans');
let b_ans=document.getElementById('b_ans');
let c_ans=document.getElementById('c_ans');
let d_ans=document.getElementById('d_ans');
let submit=document.getElementById('submit');
let quiz=document.getElementById('quiz');

let bool=true;
let idCheck;

let ct=0;
let score=0;
loadQuiz();
// function deselectAnswers() {
//     // answerEls.forEach((answerEl) => {
//     //     answerEl.checked = false;
//     // });
//     Array.from(answer).forEach(element => {
//         element.checked = false;
//     });
    
// }
function loadQuiz(){
    if(bool==false){
        Array.from(answer).forEach(element => {
            element.checked = false;
        });
    }
    bool=true;
    questionText.innerText=quizData[ct].question;
    a_ans.innerText=quizData[ct].a;
    b_ans.innerText=quizData[ct].b;
    c_ans.innerText=quizData[ct].c;
    d_ans.innerText=quizData[ct].d;

}
function quizGame(){
    // Array.from(answer).forEach(element => {
    //     element.checked = false;
    // });
    if(ct<quizData.length){
        
        Array.from(answer).forEach(element => {
            if(element.checked == true){
                // console.log(element.id);
                bool=false;
                
                if(element.id===quizData[ct].correct){
                    score++;
                }
                
            }


        });
        if(bool==false){
            ct++;
            if(ct<quizData.length) {loadQuiz();}
        }
    }
    else {
        quiz.innerHTML = `
                <h3 class="quizHeader">You answered correctly at ${score}/${quizData.length} questions.</h3>
                
                <button onclick="location.reload()">Reload</button>
                `;
                

    }
        
    // console.log(ct,bool);
}

submit.addEventListener('click',quizGame);
