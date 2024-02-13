const clock = document.querySelector('#clock');
// console.log(date)
function setTime() {
  const date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
setInterval(setTime, 1000);

// // const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// setInterval(function () {
//   let date = new Date();
//   // console.log(date.toLocaleTimeString());
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);
