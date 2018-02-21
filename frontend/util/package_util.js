export const createPackage = (payload) => (
  $.ajax({
    url: '/api/package',
    method: 'POST',
    data: payload
  })
);
