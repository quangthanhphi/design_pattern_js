// Ứng dụng phần mềm: DOTA 2, IPHONE 14
// Ứng dụng cuộc sống: GIAO THÔNG, pre order
// ĐỘ KHÓ: 3, sử dụng: 5

class Observer {
  constructor(name) {
    //  tên
    this.namePick = name
  }

  goToHelp(location) {
    console.log(`${this.namePick}::PING::${JSON.stringify(location)}`)
  }

  updateStatus(location){
    this.goToHelp(location)
  }
}

class Subject {

  constructor(){
    this.observerList = []
  }

  addObserver(observer) {
    this.observerList.push(observer)
  }

  notify(location) {
    this.observerList.forEach(observer => observer.updateStatus(location))
  }
}

const team = new Subject()

//pick team
const yasuo = new Observer('yasuo')
const yone = new Observer('yone')

//add to team
team.addObserver(yasuo)
team.addObserver(yone)

//push location to team (PING)
team.notify({long: 123, lat: 345})