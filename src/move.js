// const ball = document.querySelector('.wrapper');

// // document.onmousedown = setMousePosition;
// const score = 3;
// const initialX = ball.left + ball.width / 2;
// const initialY = ball.top + ball.height / 2;

// ball.onmousedown = function(e) {
//     let shiftX = event.clientX - ball.getBoundingClientRect().left;
//     let shiftY = event.clientY - ball.getBoundingClientRect().top;

//     ball.style.position = 'absolute';
//     ball.style.zIndex = 1000;
//     document.body.append(ball);

//     moveAt(event.pageX - initialX, event.pageY - initialY);

//     // переносит мяч на координаты (pageX, pageY),
//     // дополнительно учитывая изначальный сдвиг относительно указателя мыши
//     function moveAt(pageX, pageY) {
//         ball.style.left = score * (pageX - shiftX) + 'px';
//         ball.style.top = score * (pageY - shiftY) + 'px';
//     }

//     function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//     }

//     // передвигаем мяч при событии mousemove
//     document.addEventListener('mousemove', onMouseMove);

//     // отпустить мяч, удалить ненужные обработчики
//     ball.onmouseup = function () {
//         document.removeEventListener('mousemove', onMouseMove);
//         ball.onmouseup = null;
//     };
// }

// ball.ondragstart = function() {
//     ball.style.left = initialX + 'px';
//     ball.style.top = initialY + 'px';
//     return false;
// };

var obj = document.getElementById('sat');
/*Ловим касание*/
obj.addEventListener('touchstart', function(event) {
if (event.targetTouches.length == 1) {
var touch=event.targetTouches[0];
touchOffsetX = touch.pageX - touch.target.offsetLeft;
touchOffsetY = touch.pageY - touch.target.offsetTop;
}
}, false);
/*Передвигаем объект*/
obj.addEventListener('touchmove', function(event) {
if (event.targetTouches.length == 1) {
var touch = event.targetTouches[0];
obj.style.left = touch.pageX-touchOffsetX + 'px';
obj.style.top = touch.pageY-touchOffsetY + 'px';
}
}, false);

var tarobj=document.getElementById('dro');
tarobj.addEventListener('touchend', function(event) {
if (event.changedTouches.length == 1) {
var tarWidth=tarobj.offsetWidth;
var tarHeight=tarobj.offsetHeight;
var tarX=tarobj.offsetLeft;
var tarY=tarobj.offsetTop;
console.log(1);

if(
(event.changedTouches[0].pageX > tarX) &&
(event.changedTouches[0].pageX < (tarX + tarWidth)) &&
(event.changedTouches[0].pageY > tarY) &&
(event.changedTouches[0].pageY < (tarY + tarHeight))){
/*Мы над объектом tarobj*/
tarobj.style.WebkitTransform="translate("+(touch.pageX-touchOffsetX)+"px,"+(touch.pageY-touchOffsetY)+"px)";
console.log(2);

}
}
}, false);