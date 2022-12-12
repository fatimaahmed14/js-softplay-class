class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    console.log(numAdults, numChildren)
  }

  leave(numAdults, numChildren) {
    console.log(numAdults, numChildren)
  }

  occupy() {}
}

module.exports = {
  Softplay
}
