function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositMouths = Number(input[1]);
    let godishenLihvenProzent = Number(input[2] / 100);

    let finalAmount = depositAmount + depositMouths * ((depositAmount * godishenLihvenProzent) / 12);

    console.log(finalAmount);
}

