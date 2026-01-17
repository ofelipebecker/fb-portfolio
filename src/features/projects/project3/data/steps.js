import { StepsContent } from '../components/StepsContent';
import { stepsData } from './stepsData';

export const steps = stepsData.map((data, index) => ({
    data: data,
    content: StepsContent[index],
}));
