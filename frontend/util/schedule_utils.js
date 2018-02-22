export const fetchContractorSchedule = (userId) => (
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

export const fetchUserSchedules = () => (
  $.ajax({
    url: `/api/allSchedules`,
    method: 'GET'
  })
);
