export const fetchContractorSchedule = (userId) => (
  $.ajax({
    url: '/api/schedules',
    method: 'GET',
    data: userId
  })
);
