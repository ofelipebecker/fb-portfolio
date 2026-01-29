const createIntro = (language) => {
  const introData = require(`./data/${language}/introData.js`).introData;
  const imageCTBIntro = require('../../../assets/images/proj-ctb/ctb-intro.png');

  return {
    data: introData,
    image: imageCTBIntro,
  };
};

export default createIntro;
