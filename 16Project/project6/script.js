function randomColorCode() {
    const hex = '1234567890ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[parseInt(Math.random() * 16)];
    }
    return color;
  }
  let intervalId;
  const start = document.querySelector('#start');
  start.addEventListener('click', (e) => {
    e.preventDefault();
    if (!intervalId) intervalId = setInterval(bgChanger, 1000);
  });
  function bgChanger() {
    document.body.style.backgroundColor = `${randomColorCode()}`;
  }
  
  const stop = document.querySelector('#stop');
  stop.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(intervalId);
    intervalId = null;
  });
  