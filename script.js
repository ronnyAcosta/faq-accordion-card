function showAnswer(option){
    let answer = option.querySelectorAll('.answer');
    let arrow = option.querySelectorAll('.arrow');
    let question = option.querySelectorAll('.question');
    console.log(answer);
    if(answer[0].style.display=='' || answer[0].style.display=='none' ){
        answer[0].style.display = 'flex';
        arrow[0].style.transform = 'rotate(180deg)'; 
        question[0].classList.add('active'); 
    }
    else if(answer[0].style.display=='flex'){
        answer[0].style.display = 'none';
        arrow[0].style.transform = 'rotate(0)'
        question[0].classList.remove('active');
    }
    console.log(answer[0].style.display)
}