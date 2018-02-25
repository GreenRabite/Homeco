export const createPackage = (payload) => (
  $.ajax({
    url: '/api/package',
    method: 'POST',
    data: payload
  })
);

export const fetchUserPackage = (userId) => (
  $.ajax({
    url: `/api/package/${userId}`,
    method: 'GET'
  })
);
