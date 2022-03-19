import { createContext } from 'react';
import { CONSTANTS } from "../BarChart/constants";

export const GlobalState = createContext({
    yMax: CONSTANTS.MAX_BAR_HEIGHT
});