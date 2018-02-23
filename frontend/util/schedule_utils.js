export const fetchContractorSchedules = (category) => (
  $.ajax({
    url: `/api/schedules/cont/${category}`,
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

export const fetchUserSchedules = (userId) => (
  $.ajax({
    url: `/api/schedules/${userId}`,
    method: 'GET'
  })
);
