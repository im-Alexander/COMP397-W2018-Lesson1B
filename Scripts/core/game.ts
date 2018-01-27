// IIFE - Immediatly Invoked Function Expression
(function(){

let canvas = document.getElementById("canvas");
let stage:createjs.Stage;
let hellolabel

    function Init():void{
        console.log("Initalization Started");

        Start();
    }

    function Start():void{
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update():void{
        hellolabel.roatation += 5;
        stage.update(); //redraws stage
    }

    function Main():void{
        console.log("Game started");

        hellolabel = createjs.Text("Hello, World", "40px Consolas", "#000000");
        hellolabel.x = 100;
        hellolabel.y = 100;

        stage.addLabel(hellolabel);
    }

    window.onload = Init;

})();