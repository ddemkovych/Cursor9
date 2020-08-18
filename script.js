let interval;
const getRandomColor =  () => {
    let colorIndex = [];
    let startCol = '#';
	for (let i = 0; i < 6; i++) {
		colorIndex[i] = Math.floor(Math.random() * 10);
	}
	return startCol += colorIndex.join('');
};



const setColor = () => {
	let div = document.querySelectorAll('.block'); 
		for (let i = 0; i < div.length; i++) {
			div[i].style.backgroundColor = `${getRandomColor()}`;
		}
};

  
  let button = false;
 const generateBlocksInterval =  () => {
    if(button) {
      clearInterval(interval);
      document.querySelector("button").innerHTML = "Start";
      button = false;
    } else {
      interval = setInterval(() => setColor(), 1000);
      document.querySelector("button").innerHTML = "Stop";
      button = true;
    }
  };