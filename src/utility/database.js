// for gave data
const addTime = (id) => {
  let playTime = {};

  //get the shopping cart from local storage
  const savePlayed = localStorage.getItem("-time-to-play");
  if (savePlayed) {
    playTime = JSON.parse(savePlayed);
  }

  // add quantity
  const quantity = playTime[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    playTime[id] = newQuantity;
  } else {
    playTime[id] = 1;
  }
  localStorage.setItem("-time-to-play", JSON.stringify(playTime));
};

// for break time
const addToDatabase = (id) => {
  let breakTime = [];

  //get the time from local storage
  breakTime.push(id);
  localStorage.setItem("-take-a-break", breakTime);
};

const getSaveTime = () => {
  let breakTime = [];

  //get the time from local storage
  const saveTime = localStorage.getItem("-take-a-break");
  if (saveTime) {
    breakTime = saveTime;
  }
  return breakTime;
};

export { addTime, addToDatabase, getSaveTime };
