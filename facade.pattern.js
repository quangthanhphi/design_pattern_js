// Ứng dụng phần mềm: SHOPEE phí vận chuyển
// Ứng dụng cuộc sống: Đằng sau bộ vest
// ĐỘ KHÓ: 1, sử dụng: 5

class Discount {
  calc(value) {
    return value * 0.9
  }
}

class Fees {
  calc(value) {
    return value * 1.05
  }
}

class Shipping {
  calc() {
    return 5
  }
}

class ShopeeFacadePattern {
  constructor() {
    this.discount = new Discount()
    this.fees = new Fees()
    this.shipping = new Shipping()
  }

  calc (price) {
    price = this.discount.calc(price)
    console.log(`Discount::`, price)
    price = this.fees.calc(price)
    console.log(`Fees::`, price)
    price += this.shipping.calc(price)
    console.log(`Shipping::`, price)

    return price;
  }
}

function buy (price) {
  const shopee = new ShopeeFacadePattern()
  console.log(`Price::`, shopee.calc(price))
}

buy(120)