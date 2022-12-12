class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    // every child must be accompnied with an adult
    // numAdults > numChildren = true
    // if true then the num of both needs to be added to existing total
    // adults is a greater number as a child has to have AT LEAST on adult with them
    // numAdults < numChildren = false
  }

  leave(numAdults, numChildren) {
    // a child must leave with AT LEAST one adult
    // numAdults > numChildren = true
    // number of adults and children leaveing must be deducted from existing count
    // numAdults < numChildren = false
    // when there is 1 adult and child adult can not leave alone
    // there must always be 1 adult and 1 child in play area
  }

  occupy() {
    // need to record numbers of adults and children here this.Num
    // adults = this.numAdults
    // children = this.numChildren
  }
}

module.exports = {
  Softplay
}
