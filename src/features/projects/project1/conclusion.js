const createConclusion = (language) => {
  const conclusionData = require(`./data/${language}/conclusionData.js`).conclusionData;

  return {
    data: conclusionData,
    video: 'https://www.youtube.com/embed/XVcYAwtsil8',
  };
};

export default createConclusion;
