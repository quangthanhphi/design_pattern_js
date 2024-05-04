// sử dụng nhiều nhất trong lập trình hướng đối tượng
// Ứng dụng: ứng dụng logistics
// ĐỘ KHÓ: 3, sử dụng: 5

//Không nên sử dụng simple factory vì vi phạm trách nhiệm thứ nhất trong SOLID

//create service Car
class Car {
  constructor( { name = 'Ford Ranger 2023', doors = 4, price = '10 VND', customerInfo = {} }) {
    this.name = name
    this.doors = doors
    this.price = price
    this.customerInfo = customerInfo
  }
}

//create service Logistics (Core, không đụng vào)
class ServiceLogistics {
  transportClass = Car
  getTransport = (info) => {
    return new this.transportClass(info)
  }
}

//order for customer by Car
const carService = new ServiceLogistics()
console.log('Car Service::', carService.getTransport({ customerInfo: {name: 'car', cargoVolume: '100kg'}}))

//cach 1
class Truck {
  constructor( { name = 'Container Ranger 2023', doors = 16, price = '100 VND', customerInfo = {} }) {
    this.name = name
    this.doors = doors
    this.price = price
    this.customerInfo = customerInfo
  }
}

carService.transportClass = Truck
console.log('Truck Service::', carService.getTransport({ customerInfo: {name: 'truck', cargoVolume: '1000kg'}}))

//Cach 2
class TruckService extends ServiceLogistics{
  transportClass = Truck
}

const truckService = new TruckService
console.log('Truck Service::', truckService.getTransport({ customerInfo: {name: 'truck 2', cargoVolume: '2000kg'}}))
