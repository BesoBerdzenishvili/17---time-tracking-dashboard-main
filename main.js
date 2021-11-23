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

const activity = [work, play, study, exercise, social, selfC, lastWork, lastPlay, lastStudy, lastExercise, lastSocial, lSelfC];
const daily = [5,1,0,1,1,0,7,2,1,1,3,1];
const weekly = [32,1,4,4,5,2,36,8,7,5,10,2];
const monthly = [103, 23, 19, 11, 21, 7, 128, 29, 18, 23, 11];
// Daily
btn1.addEventListener('click', ()=> {
    for (let i = 0; i < activity.length; i++) {
            activity[i].innerHTML = daily[i];
        }
});
// Weekly
btn2.addEventListener('click', ()=> {
    for (let i = 0; i < activity.length; i++) {
        activity[i].innerHTML = weekly[i];
    }
});
// Monthly
btn3.addEventListener('click', ()=> {
    for (let i = 0; i < activity.length; i++) {
        activity[i].innerHTML = monthly[i];
    }
});