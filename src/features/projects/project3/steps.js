import { StepsContent } from './components/StepsContent';
import { stepsData } from './data/stepsData';
import { stepsImages } from './stepsImages';

const steps = stepsData.map((data, index) => ({
    data: data,
    content: StepsContent[index],
    images: stepsImages[index],
}));

export default steps;
