export const fetchUserSchedules = (userId) => (
  $.ajax({
    url: `/api/schedules/${userId}`,
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
