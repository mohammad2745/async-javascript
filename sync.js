const processOrder = (customer) => {
    console.log('Processing order for customer 1');
    setTimeout(() => {
      console.log('cooking finished');
    }, 3000);

    console.log('Order processed for customer 1');
};

console.log('Take order for customer 1');
processOrder();
console.log('Completed order for customer 1');  