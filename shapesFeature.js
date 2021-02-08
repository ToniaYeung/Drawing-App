function shapesFeature(){
	this.name = "shapesFeature";
	this.icon = "assets/shapes.png";
    
    this.draw = function(){
        if (mouseIsPressed) {
		ellipse(pmouseX, pmouseY, 100,100);
	   }
    }
}
