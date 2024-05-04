// Ứng dụng : momo to visa, register membership youtube
// ĐỘ KHÓ: 2, sử dụng: 4

//define the MomoPaymentAdapter class
class MomoPaymentAdapter {
  constructor(momoPayment) {
    this.momoPayment = momoPayment
  }

  //define the payWithVisa method that is required by the youtube registration process
  payWithVisa(visaPayment) {
    //convert the momo to visa
    const convertedPayment = this.convertToVisaPayment(this.momoPayment)
    //make the payment using the visa
    visaPayment.pay(convertedPayment)
  }

  //define the convertToVisaPayment method
  convertToVisaPayment(momoPayment) {
    //convert the momo to a visa
    const conversionRate = 24000 // 1USD = 24000 VND
    const visaAmount = momoPayment.amount / conversionRate
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expiryDate: momoPayment.expiryDate,
      cvv: momoPayment.cvv,
      amount: visaAmount
    }

    return visaPayment
  }
}

//define the visa payment
class VisaPayment {
  pay(payment) {
    console.log(`Paying ${payment.amount} USD with Visa Card ${payment.cardNumber}`)
  }
}

//define the momo payment
class MomoPayment {
  constructor(cardNumber, expiryDate, cvv, visaAmount) {
    this.cardNumber = cardNumber
    this.expiryDate = expiryDate
    this.cvv = cvv
    this.amount = visaAmount
  }
}

//create a momo 
const momoPayment = new MomoPayment('123', '12/25', '345', 23000)

//create a momo-to-visa adapter
const momoAdapter = new MomoPaymentAdapter(momoPayment)

//create a visa payment
const visaPayment = new VisaPayment()

//Register for youtube
momoAdapter.payWithVisa(visaPayment)