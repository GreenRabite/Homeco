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

export const fetchUserSchedules = (userId) => (
  $.ajax({
    url: `/api/schedules/${userId}`,
    method: 'GET'
  })
);

export const reschedule = (id, workDate) => (
  $.ajax({
    url: `/api/schedule`,
    method: 'PATCH',
    data: {
      id: id,
      workDate: workDate
    }
  })
);
