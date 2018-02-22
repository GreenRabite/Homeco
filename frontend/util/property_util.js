export const propertyRequire = (address) => (
  $.ajax({
    url: '/api/property',
    method: 'POST',
    data: address
  })
);


export const fetchProperty = (userId) => (
  $.ajax({
    url: `/api/property/${userId}`,
    method: 'GET'
  })
);
