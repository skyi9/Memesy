function timeToHex(time) {
  const timestamp = time instanceof Date ? time.getTime() : time;
  const hex = (timestamp + getRandomNumber()).toString(16);
  return hex;
}

const getRandomNumber = () => {
  const index = Math.floor(Math.random() * 100);
  const arr = [];
  for (let i = 0; i < 101; i++) {
    const random1 = Math.ceil(Math.random() * (371 * i + 1));
    const random2 = Math.ceil(Math.random() * 2999);
    arr.push(random1 * random2);
  }
  return arr[index];
};

const generateUUID = (name) => {
  let uuid = name.toUpperCase();
  uuid += timeToHex(new Date());
  uuid += getRandomNumber().toString(16);
  return uuid;
};

export default generateUUID;
