const takeOrder = (customer, cb) => {
  console.log(`take order for ${customer}`);
  cb(customer);
};

const processOrder = (customer, cb) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log(`cooking completed`);
    console.log(`order processed for ${customer}`);
    cb(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`order complete for ${customer}`);
};

takeOrder('customer 1', (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});