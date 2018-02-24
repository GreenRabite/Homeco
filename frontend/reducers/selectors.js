export const allScheduleDates = ({schedules}) => Object.keys(schedules).map(id => schedules[id].workDate);
