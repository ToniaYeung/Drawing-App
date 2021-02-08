function triangletool(){
	this.name = "Shapes";
	this.icon = "Shapes/triangle.png";
    
    this.draw = function(){
        if (mouseIsPressed) {
		ellipse(pmouseX, pmouseY, 100,100);
	   }
    }
}