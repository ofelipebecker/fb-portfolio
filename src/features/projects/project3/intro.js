const createIntro = (language) => {
  const introData = require(`./data/${language}/introData.js`).introData;
  const imageVCXTIntro = require('../../../assets/images/proj-vcx-tables/vcxt-intro.png');

  return {
    data: introData,
    image: imageVCXTIntro,
  };
};

export default createIntro;
