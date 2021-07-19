class Bird extends Parent{
constructor(x,y,w,h){
super(x,y,w,h)
this.image=loadImage("sprites/bird.png")
}
display(){
   super.display()
   //this.body.position.x=mouseX
   //this.body.position.y=mouseY
}
}