import { StepsContent } from './components/StepsContent';
import { stepsData } from './data/stepsData';

// import { introData } from "../../features/projects/project3/data/introData";
// import { conclusionData } from "../../features/projects/project3/data/conclusionData";

export const steps = stepsData.map((data, index) => ({
    data: data,
    content: StepsContent[index],
}));
