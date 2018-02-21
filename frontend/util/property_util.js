export const propertyRequire = (address) => (
  $.ajax({
    url: '/api/property',
    method: 'POST',
    data: address
  })
);
