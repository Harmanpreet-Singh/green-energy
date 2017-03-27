var masthead = document.getElementsByClassName("mh-image")[0];
var slides = ['roof-with-solar-panels.jpg', 'solar-energy-panel.jpg', 'windmill.jpg', 'windmills-3.jpg'];

var i = 0;

runSlides();

setInterval(function(){ runSlides(); console.log('Changing img'); }, 6000);

function fadeOut(){
    masthead.style.opacity = 0;
}

function runSlides(){
    masthead.style.opacity = 1;

    if(i > 3) i = 0;

    masthead.innerHTML = '<img src="img/' + slides[i] + '"></img>';

    i++;

    setTimeout(function(){ fadeOut(); }, 5000);
}


var buttons = document.getElementsByClassName("btn");
var contents = ['<img src="img/dam.jpg"></img><p>This uses flowing water to move turbines which generate electricity. Hydropower provides 20 percent of the world’s energy needs, according to the United States Geological Survey.</p>', '<img src="img/solar-power.jpg"></img><p>The sun will be a source of energy for billions of years. The current technology to capture this energy includes photovoltaic panels, solar collectors and thin-film solar sheeting. The solar cells turn sunlight into electricity directly, so there is no need for a generator.</p>', '<img src="img/wind-farm.jpg"></img><p>This is one of the least expensive alternative fuel sources available.</p>'];

var container = document.getElementsByClassName("container")[0];

 for(var i=0; i< buttons.length; i++) {
       buttons[i].addEventListener("click", handleClick );
 }

buttons[0].click();

function handleClick(event){
    //alert(event.target.innerHTML);
    for(var i=0; i< buttons.length; i++) {
        if(buttons[i].id == 'active') buttons[i].removeAttribute('id');
    }
    container.innerHTML = contents[(event.target.innerHTML) - 1];
    event.target.id = 'active';
}