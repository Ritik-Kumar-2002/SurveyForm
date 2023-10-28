const submit = document.getElementById("submit");
const form = document.getElementById('customerSurvey');
let name= document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById("subject");
let choice1 = document.getElementsByName('choice1');
let choice2 = document.getElementsByName('choice2');
let choice3 = document.getElementsByName('choice3');

let username = document.getElementsByClassName('username')[0];
let useremail = document.getElementsByClassName('useremail')[0];
let userchoice1 = document.getElementsByClassName('userchoice1')[0];
let userchoice2 = document.getElementsByClassName('userchoice2')[0];
let userchoice3 = document.getElementsByClassName('userchoice3')[0];
let userfeedback = document.getElementsByClassName('userfeedback')[0];


customerSurvey.addEventListener("submit", (event) => {
    event.preventDefault();

    username.innerHTML = username.innerHTML + name.value;
    useremail.innerHTML = useremail.innerHTML + email.value;
    userfeedback.innerHTML = userfeedback.innerHTML + subject.value;

    if(choice1[0].checked === true ){
        userchoice1.innerHTML = userchoice1.innerHTML + "YES";
        console.log("YES");
    }else {
        userchoice1.innerHTML = userchoice1.innerHTML + "NO";
        console.log("NO");
    }

    if(choice2[0].checked === true ){
        userchoice2.innerHTML = userchoice2.innerHTML + "YES";
        console.log("YES");
    }else {
        userchoice2.innerHTML = userchoice2.innerHTML + "NO";
        console.log("NO");
    }

    if(choice3[0].checked === true ){
        userchoice3.innerHTML = userchoice3.innerHTML + "Satisfied";
        console.log("Satisfied");
    }else if(choice3[1] == true ){
        userchoice3.innerHTML = userchoice3.innerHTML + "Undecided";
        console.log("Undecided");
    }else{
        userchoice3.innerHTML = userchoice3.innerHTML + "UnSatisfied";
        console.log("UnSatisfied");
    }

    document.getElementById("formId").reset();
    
})