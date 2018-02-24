export const fetchContractorSchedules = (category) => (
  $.ajax({
    url: `/api/fetchcontschedules/${category}`,
    method: 'GET'
  })
);

export const updateWorkSchedule = (schedule) => {
  console.log(schedule);
  return $.ajax({
    url: `/api/contschedules`,
    method: 'PATCH',
    data: {schedule}
  });
};


export const createSchedule = (payload) => (
 $.ajax({
   url: '/api/schedules',
   method: 'POST',
   data: payload
 })
);

export const fetchUserSchedules = (userId, completed) => (
  $.ajax({
    url: `/api/schedules/${userId}/${completed}`,
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
