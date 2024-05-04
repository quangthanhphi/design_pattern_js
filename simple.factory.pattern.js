// sử dụng nhiều nhất trong lập trình hướng đối tượng
// Ứng dụng: ứng dụng logistics
// ĐỘ KHÓ: 2, sử dụng: 5
// ưu điểm: cơ chế để tạo đối tượng
// nhược điểm: trách nhiệm hàm rất nặng, ko chạy đc sẽ dẫn đến lỗi cả hệ thống

//level 0 without simple factory pattern

const serviceLogistics = (cargoVolume) => {
  switch (cargoVolume) {
    case '10':
      return {
        name: 'Truck 10',
        doors: 6,
        price: '100.000 VND'
      }

    case '20':
      return {
        name: 'Truck 20',
        doors: 16,
        price: '1.000.000 VND'
      }
  }
}

console.log(`level 0::`, serviceLogistics('20'))

// with simple factory pattern
class ServiceLogistics {
  constructor(doors = 6, price = '100.000 VND', name = 'Truck 10'){
    this.name = name
    this.doors = doors
    this.price = price
  }

  static getTransport = (cargoVolume) => {
    switch(cargoVolume) {
      case '10': 
        return new ServiceLogistics()
      case '20': 
        return new ServiceLogistics(16, '1.000.000 VND', 'Truck 20')
    }
  }
}
console.log(`level XXX::`, ServiceLogistics.getTransport('10'))

