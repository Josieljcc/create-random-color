const generateRandom = () => {
  const color = Math.random().toString(16).substring(2, 8);
  return color;
};

module.exports = generateRandom;
