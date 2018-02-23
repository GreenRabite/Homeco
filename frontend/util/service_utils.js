export const fetchService = (id) => (
  $.ajax({
    url: `/api/services/${id}`,
    method: 'GET'
  })
);
