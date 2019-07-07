class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
       let perimeter = 0
       this.sides.forEach(side => perimeter += side)
       return perimeter
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[0] + this.sides[2] > this.sides[1]) && (this.sides[1] + this.sides[2] > this.sides[0])) {
                return true
            }
        }
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            if ((this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3])) {
                return true
            }
        }
        return false
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}