export const fetchUserSchedules = (category) => (
  $.ajax({
    url: `/api/schedules/${category}`,
    method: 'GET'
  })
);

export const createSchedule = (payload) => (
 $.ajax({
   url: '/api/schedules',
   method: 'POST',
   data: payload
 })
);
