export const fetchComplains = (userId) => (
  $.ajax({
    url: `/api/complains/${userId}`,
    method: 'GET'
  })
);

export const createComplain = (complain) => (
  $.ajax({
    url: '/api/complain',
    method: 'POST',
    data: complain
  })
);
