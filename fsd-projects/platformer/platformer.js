$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid()


     //TODO 2 - Create Platforms
    createPlatform(100,640, 175,10,"pink" );
    createPlatform(400,625,20,200,"white");

    createPlatform(550,600,200,10,"pink" );
    createPlatform(750,600, 20,200 ," pink");

    createPlatform(750,500,20,100, " white");
    createPlatform(200,475,200,10, "pink");

    createPlatform(650,400,200,10 ," white");
    createPlatform(100,340,289,10," pink");

    createPlatform(330,220,150,10," white");
    createPlatform(475,50,10,200,"pink");

    createPlatform(1100,400,275,10,"white");
    createPlatform(850,600,300,10,"pink");

    createPlatform(1210,650,10,150,"white");
    createPlatform(700,275,275,10,"pink");

    createPlatform(900,420,150,10,"white");
    createPlatform(1100,150,200,10,"pink");

    createPlatform(1300,0,10,150 ,"white");
    createPlatform(100,640,10,200,"pink");

    // TODO 3 - Create Collectables
    createCollectable("database",450,200,1,0);
    createCollectable("database",100,700,1,0);

    createCollectable("database",700,700,1,0);
    createCollectable("database",1200,700,1,0);

    createCollectable("database",1250,100,1,0);
    
    // TODO 4 - Create Cannons
    createCannon("right",300,1000);
    createCannon("top",600,1150);
    
    createCannon("top",1000,1150 );
    createCannon("left",500,2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
