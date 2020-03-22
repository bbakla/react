import {v4 as uuid} from "uuid";

export const timerData = {
    timers: [
        {
            title: 'Practice squat',
            project: 'Gym movement',
            id: uuid(),
            elapsed: 5456099,
            runningSince: Date.now(),
        },
        {
            title: 'Study react',
            project: 'Software development',
            id: uuid(),
            elapsed: 1273998,
            runningSince: null,
        }
    ]
};
