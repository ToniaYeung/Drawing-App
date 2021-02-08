function eraserTool(){
	this.name = "Eraser";
	this.icon = "assets/eraser.png";
    
    //
this.draw = function(){
	strokeWeight(30);
	stroke('white');
	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}
    
}