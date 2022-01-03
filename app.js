const t1Button = document.querySelector('#t1Button');
const t2Button = document.querySelector('#t2Button');
const t1Display = document.querySelector('#t1Display');
const t2Display = document.querySelector('#t2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

// ExperimenTal Starts

const teamNameForm = document.querySelector('#formName');
const team1Name = document.querySelector('#t1');
const team2Name = document.querySelector('#t2');

teamNameForm.addEventListener('submit', function(e){
    e.preventDefault();
    const t1Input = teamNameForm.elements.t1formName;
    const t2Input = teamNameForm.elements.t2formName;
    addTeamName(t1Input.value, t2Input.value);
    t1Input.value='';
    t2Input.value='';

})

const addTeamName = (t1formName, t2formName) => {
    team1Name.innerText = t1formName;
    team2Name.innerText = t2formName;
}

// ExperimenTal END

let t1Score = 0;
let t2Score = 0;
let winningScore = 10;
let isGameOver = false;



t1Button.addEventListener('click',function (){
    if(!isGameOver) {
        t1Score += 1 ;
    
        if(t1Score == winningScore) {
            isGameOver = true;
            t1Display.classList.add('has-text-success');
            t2Display.classList.add('has-text-danger');
            t1Button.disabled = true;
            t2Button.disabled = true;
        }
        t1Display.textContent = t1Score;
     }
     
})

t2Button.addEventListener('click',function (){
    if(!isGameOver) {
        t2Score += 1 ;
    
        if(t2Score == winningScore) {
            isGameOver = true;
            t2Display.classList.add('has-text-success');
            t1Display.classList.add('has-text-danger');
            t1Button.disabled = true;
            t2Button.disabled = true;
        }
        t2Display.textContent = t2Score;
     }
     
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetAll();
})

resetButton.addEventListener('click', resetAll)

function resetAll(){
    isGameOver = false;
    t1Score = 0;
    t2Score = 0;
    t1Display.textContent = t1Score;
    t2Display.textContent = t2Score;
    t1Display.classList.remove('has-text-success','has-text-danger');
    t2Display.classList.remove('has-text-success','has-text-danger');
    t1Button.disabled = false;
    t2Button.disabled = false;
}


