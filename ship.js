class Ship{
    constructor(){
        this.x = width/2;
        this.y = height-20;
        this.width = 70;
        this.height = 20;
        this.xdir = 0
    }

    show(){

      push();
      rectMode(CENTER)
      fill("green");
      noStroke();
      rect(this.x,this.y,this.width,this.height);
      rect(this.x,height-40,20,20);
      pop();

      if(this.x > 760){
        this.x = 760
       }else if(this.x < 30){
        this.x = 30
       }
    }

    move(){
      if(keyDown(RIGHT_ARROW)){
        this.x += 10;
      }
      if(keyDown(LEFT_ARROW)){
        this.x -= 10;
      }
    }

    



   
    
    
}