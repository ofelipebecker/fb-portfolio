const createSteps = (language) => {
  const StepsContent = require(`./components/${language}/StepsContent.jsx`).StepsContent;
  const stepsData = require(`./data/${language}/stepsData.js`).stepsData;
  const stepsImages = require('./stepsImages').stepsImages;

  const steps = stepsData.map((data, index) => ({
    data: data,
    content: StepsContent[index],
    images: stepsImages[index],
  }));

  return steps;
};

export default createSteps;
