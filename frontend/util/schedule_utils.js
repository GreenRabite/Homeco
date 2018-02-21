export const fetchContractorSchedule = (userId) => (
  $.ajax({
    url: '/api/schedules',
    method: 'GET',
    data: userId
  })
);

export const createSchedule = (payload) => (
 $.ajax({
   url: '/api/schedules',
   method: 'POST',
   data: payload
 })
);
