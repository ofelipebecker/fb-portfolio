const createIntro = (language) => {
  const introData = require(`./data/${language}/introData.js`).introData;
  const imageVCXDIntro = require('../../../assets/images/proj-vcx-dashboard/vcxd-intro.png');

  return {
    data: introData,
    image: imageVCXDIntro,
  };
};

export default createIntro;
