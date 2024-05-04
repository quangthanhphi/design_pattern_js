// đứng giữa 2 chủ thể và nhận trách nhiệm
// Ứng dụng phần mềm: tăng lương nhân viên
// Ứng dụng cuộc sống: dịch vụ môi giới
// ĐỘ KHÓ: 3, sử dụng: 4

class Leader {
  receiveRequest(offer) {
    console.log(`BOSS::${offer}`)
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader()
  }

  receiveRequest(offer) {
    this.leader.receiveRequest(offer)
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer
  }

  applyFor(target) {
    target.receiveRequest(this.offer)
  }
}

const devs = new Developer('500k')
devs.applyFor(new Secretary())
