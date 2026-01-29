const createConclusion = (language) => {
  const conclusionData = require(`./data/${language}/conclusionData.js`).conclusionData;

  return {
    data: conclusionData,
    video: '',
  };
};

export default createConclusion;
