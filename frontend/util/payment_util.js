export const fetchPayment = (userId) => (
  $.ajax({
    url: `/api/payment/${userId}`,
    method: 'GET'
  })
);

export const createPayment = (payment) => (
  $.ajax({
    url: '/api/payment',
    method: 'POST',
    data: payment
  })
);
