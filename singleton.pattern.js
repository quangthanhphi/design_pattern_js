//  tạo 1 phiên bản của 1 lớp duy nhất và cung cấp điểm truy cập cho các ứng dụng
// Ứng dụng: shopping, load balancer
// ĐỘ KHÓ: 1, sử dụng: 4

'use strict'

class RoundRobin {
  constructor() {
    if( RoundRobin.instance ) {
      return RoundRobin.instance
    }
    RoundRobin.instance = this // đầu tiên vào đây, nếu tồn tại thì return ở trên
    this.servers = []
    this.index = 0
  }

  //add server
  addServer(server) {
    this.servers.push(server)
  }

  //get next server
  getNextServer() {
    if(!this.servers.length) {
      throw new Error('No server available')
    }

    const server = this.servers[this.index]
    // thuật toán modulus ( lấy số dư chính là server)
    this.index = (this.index + 1) % this.servers.length
    return server
  }
}

const loadBalancer = new RoundRobin()
const loadBalancer1 = new RoundRobin()
console.log(`compare:: `, loadBalancer === loadBalancer1)

loadBalancer.addServer(`Server 01`)
loadBalancer.addServer(`Server 02`)
loadBalancer.addServer(`Server 03`)

console.log(loadBalancer.getNextServer()) //Server 01
console.log(loadBalancer.getNextServer()) //Server 02
console.log(loadBalancer.getNextServer()) //Server 03
console.log(loadBalancer.getNextServer()) //Server 01
console.log(loadBalancer.getNextServer()) //Server 02