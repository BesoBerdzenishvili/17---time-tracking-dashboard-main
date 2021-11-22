const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const work = document.querySelector('.work');
const play = document.querySelector('.play');
const study = document.querySelector('.study');
const exercise = document.querySelector('.exercise');
const social = document.querySelector('.social');
const selfC = document.querySelector('.selfC');
const lastWork = document.querySelector('.lastWork');
const lastPlay = document.querySelector('.lastPlay');
const lastStudy = document.querySelector('.lastStudy');
const lastExercise = document.querySelector('.lastExercise');
const lastSocial = document.querySelector('.lastSocial');
const lSelfC = document.querySelector('.lastSelfC');
// Daily
btn1.addEventListener('click', ()=> {
    work.innerHTML = '5';
    play.innerHTML = '1';
    study.innerHTML = '0';
    exercise.innerHTML = '1';
    social.innerHTML = '1';
    selfC.innerHTML = '0';
    lastWork.innerHTML = '7';
    lastPlay.innerHTML = '2';
    lastStudy.innerHTML = '1';
    lastExercise.innerHTML = '1';
    lastSocial.innerHTML = '3';
    lSelfC.innerHTML = '1';
});
// Weekly
btn2.addEventListener('click', ()=> {
    work.innerHTML = '32';
    play.innerHTML = '1';
    study.innerHTML = '4';
    exercise.innerHTML = '4';
    social.innerHTML = '5';
    selfC.innerHTML = '2';
    lastWork.innerHTML = '36';
    lastPlay.innerHTML = '8';
    lastStudy.innerHTML = '7';
    lastExercise.innerHTML = '5';
    lastSocial.innerHTML = '10';
    lSelfC.innerHTML = '2';
});
// Monthly
btn3.addEventListener('click', ()=> {
    work.innerHTML = '103';
    play.innerHTML = '23';
    study.innerHTML = '19';
    exercise.innerHTML = '11';
    social.innerHTML = '21';
    selfC.innerHTML = '7';
    lastWork.innerHTML = '128';
    lastPlay.innerHTML = '29';
    lastStudy.innerHTML = '19';
    lastExercise.innerHTML = '18';
    lastSocial.innerHTML = '23';
    lSelfC.innerHTML = '11';
});