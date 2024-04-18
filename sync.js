const processOrder = (customer) => {
    console.log('Processing order for customer 1');

    // var currentTime = new Date().getTime();
    // while(currentTime + 3000 >= new Date().getTime());
    setTimeout(() => {
      console.log('cooking finished');
    }, 3000);

    console.log('Order processed for customer 1');
};

console.log('Take order for customer 1');
processOrder();
console.log('Completed order for customer 1');