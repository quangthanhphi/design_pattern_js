// builder phức tạp thành đơn giản
// Ứng dụng : nhà hàng khách sạn 5 sao
// ĐỘ KHÓ: 4, sử dụng: 2
// khác với prototype: độc lập, dễ quản lí rủi ro, prototype chỉ sao chép 1 đối tượng, builder xây dựng từng chi tiết, builder phù hợp với đối tượng cấu trúc phức tạp. VD: prototype(chung cư), builder(nhà phố)
// nhược điểm: thêm 1 vị trí phải thêm phương thức mới

class FifaOnlinePlayer {
  constructor(builder) {
    this.name = builder.name
    this.age = builder.age
    this.nationality = builder.nationality
    this.position = builder.position
    this.team = builder.team
    this.stats = builder.stats
  }

  toString() {
    let player = `Player:\n`
    player += `-Name: ${this.name}\n`
    player += `-age: ${this.age}\n`
    player += `-nationality: ${this.nationality}\n`
    player += `-position: ${this.position}\n`
    player += `-team: ${this.team}\n`
    player += `-stats: ${JSON.stringify(this.stats)}\n`
    return player;
  }
}

class FifaOnlinePlayerBuilder {
  constructor() {
    this.name = ''
    this.age = 0
    this.nationality = ''
    this.position = ''
    this.team = ''
    this.stats = {}
  }

  withName(name) {
    this.name = name
    return this
  }
  withAge(age) {
    this.age = age
    return this
  }
  withNationality(nationality) {
    this.nationality = nationality
    return this
  }
  withTeam(team) {
    this.team = team
    return this
  }
  withPosition(position) {
    this.position = position
    return this
  }
  withStats(stats) {
    this.stats = stats 
    return this
  }

  build() {
    return new FifaOnlinePlayer(this)
  }
}

//use
const builderPattern = new FifaOnlinePlayerBuilder()

const cr7 = builderPattern
  .withName('CR7')
  .withAge('38')
  .withNationality('Portugal')
  .withTeam('Al Nassr')
  .withPosition('FW')
  .withStats( {goals: 15, assists: 2})
  .build()

console.log(cr7.toString())

const m10 = builderPattern
  .withName('M10')
  .withAge('36')
  .withNationality('Argentina')
  .withTeam('Inter Miami')
  .withPosition('FW')
  .withStats( {goals: 10, assists: 12})
  .build()

console.log(m10.toString())