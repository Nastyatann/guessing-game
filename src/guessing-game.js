class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        let res = Math.round((this.max + this.min) / 2);
        return res;
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}
 
module.exports = GuessingGame;
