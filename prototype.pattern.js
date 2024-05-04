// Ứng dụng : clone nhân vật trong game (VD: fifa online)
// ĐỘ KHÓ: 3, sử dụng: 4
// nhược điểm: nếu thay đổi 1 instance thì ảnh hưởng các instance khác

//define a prototype object for fifa online
class FifaOnlinePlayer {
  constructor(name, team, position, goals) {
    this.name = name
    this.team = team
    this.position = position
    this.goals = goals
  }

  score() {
    this.goals++
  }

  clone(){
    return new FifaOnlinePlayer(this.name, this.team, this.position, this.goals)
  }
}
FifaOnlinePlayer.prototype.stats = {
  minutesPlayed: 0
}


//Create a new fifaOnline Player prototype
const prototypePattern = new FifaOnlinePlayer('Ronaldo', 'Al Nassr', 'FW', 0)

//create multiple instance of the fifaonline player
const cr7 = prototypePattern.clone()
cr7.stats.minutesPlayed = 1000
const m10 = prototypePattern.clone()
m10.team = 'Inter Miami'
m10.name = 'Messi'

//test the instance
cr7.score()
console.log(`${cr7.name} has scored ${cr7.goals} for ${cr7.team} this season ${JSON.stringify(cr7.stats)}`)

m10.score()
console.log(`${m10.name} has scored ${m10.goals} for ${m10.team} this season ${JSON.stringify(m10.stats)}`)