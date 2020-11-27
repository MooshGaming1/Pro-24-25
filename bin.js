class Bin{
    constructor(x,y){
this.x = x
this.y = y
this.binWidth = 220
this.binHeight = 210
this.wallThickness = 20
this.image=loadImage("TrashCan.png")
var options = {
    isStatic:true
}
this.bottomBody=Bodies.rectangle(this.x,this.y,this.binWidth,this.wallThickness,options)
this.leftWallBody=Bodies.rectangle(this.x-this.binWidth/2,this.y-this.binHeight/2,this.wallThickness,this.binHeight,options)
this.rightWallBody=Bodies.rectangle(this.x+this.binWidth/2,this.y-this.binHeight/2,this.wallThickness,this.binHeight,options)
World.add(world,this.bottomBody)
World.add(world,this.leftWallBody)
World.add(world,this.rightWallBody)
    }
    display(){
        var posB = this.bottomBody.position
        var posL = this.leftWallBody.position
        var posR = this.rightWallBody.position

        push()
translate(posL.x,posL.y)
rectMode(CENTER)
angleMode(RADIANS)
fill(255)
rotate(this.angle)
        pop()

        push()
        translate(posR.x,posR.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        rotate(-1*this.angle)
                pop()

                push()
                translate(posB.x,posB.y)
                rectMode(CENTER)
                angleMode(RADIANS)
                fill(255)
                imageMode(CENTER)
                image(this.image,0,-this.binHeight/2,this.binWidth,this.binHeight)
                        pop()
    }
}