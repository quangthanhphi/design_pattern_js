// Tách rời các phần trưu tượng để triển khai, đối lập adapter
// adapter sử dụng 2 giao diện không tương thích để hoạt động với nhau
// bridge sử dụng khi muốn tách rời phần trừu tượng và triển khai độc lập với nhau
// Ứng dụng : dùng momo hoặc thẻ visa đều được
// ĐỘ KHÓ: 3, sử dụng: 3

//define payment process
class PaymentProcess {
  pay(amount){

  }
}

//define VisaPaymentProcess class
class VisaPaymentProcess extends PaymentProcess {
  constructor(cardNumber, expiryDate, cvv) {
    super()
    this.cardNumber = cardNumber
    this.expiryDate = expiryDate
    this.cvv = cvv
  }

  //implement pay method
  pay(amount){
    console.log( `Paying ${amount} USD with visa card ${this.cardNumber}...`)
  }
}

//define MomoPaymentProcess class
class MomoPaymentProcess extends PaymentProcess {
  constructor(phoneNumber) {
    super()
    this.phoneNumber = phoneNumber
  }

  //implement pay method
  pay(amount){
    console.log( `Paying ${amount} VND with momo ${this.phoneNumber}...`)
  }
}

//define MemberRegistration
class MemberRegistration {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor
  }

  //regis 
  register() {
    const amount = 100; // the registration fee is 100
    this.paymentProcessor.pay(amount)
    console.log(`Registered for Youtube membership`)
  }
}

//create visa payment
const visaPaymentProcessor = new VisaPaymentProcess('1234.XXX', '12/25','123')
const membershipVisa = new MemberRegistration(visaPaymentProcessor)
membershipVisa.register()

//create momo payment
const momoPaymentProcessor = new MomoPaymentProcess('123456789')
const membershipMomo = new MemberRegistration(momoPaymentProcessor)
membershipMomo.register()