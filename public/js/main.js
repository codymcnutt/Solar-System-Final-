angular.module('Stars', [])

angular.module('Stars')
	.controller("MainController", ["$scope", function($scope){
		
	var moonConstructor = function(parentPlanet, numOfMoons, closestMoon, farthestMoon, smallestMoon, largestMoon){

	}


	
	function init() {

        // var stats = initStats();

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, .1, 320000);

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer({antialias:false});

        orbit = new THREE.OrbitControls(camera, renderer.domElement);

        renderer.setClearColor(new THREE.Color(0x000000, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        // create the ground plane
        var planeGeometry = new THREE.PlaneGeometry(100, 100, 100, 100);
        var planeMaterial = new THREE.MeshLambertMaterial({color: "0xffffff"});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        // rotate and position the plane
        plane.rotation.x = -0.5 * Math.PI;
        // plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        // add the plane to the scene
        scene.add(plane);

       	var scale = 3

        var imageDir = "/img/"

        var kuiperBelt = []

	var kuiperConstructor = function(){
		var size = Math.random() * 10
		var scale = 3
		var sphereGeometry = new THREE.SphereGeometry( scale * size, 5, 5);
        var asteroidTexture = THREE.ImageUtils.loadTexture(imageDir + "moon.jpg")
        var sphereMaterial = new THREE.MeshLambertMaterial();
        var asteroid = new THREE.Mesh(sphereGeometry, sphereMaterial);

        var asteroidLocX = Math.random() * 800
        var asteroidLocZ = Math.random() * 800


        asteroid.position.x = asteroidLocX;
        asteroid.position.y = 3
        asteroid.position.z = asteroidLocZ
        asteroid.castShadow = true;

        scene.add(asteroid)
	}

        // create a sun
        var sphereGeometry = new THREE.SphereGeometry(100, 90, 50);
        var sunTexture = THREE.ImageUtils.loadTexture(imageDir + "suntexture.jpg", THREE.SphericalReflectionMapping);
        var groundLayer = THREE.ImageUtils.loadTexture(imageDir + "sun.jpg")

        var sphereMaterial2 = new THREE.MeshBasicMaterial({map : groundLayer});
      
        var sphereMaterial = new THREE.MeshBasicMaterial({wireframe : false, opacity:0.4, transparent:true, envMap : sunTexture, overdraw:5000});
        var sun = new THREE.SceneUtils.createMultiMaterialObject(sphereGeometry, [ sphereMaterial2, sphereMaterial]);

        // position the sphere
        sun.position.x = 20;
        sun.position.y = 3;
        sun.position.z = 2;
        sun.castShadow = true;

        // add the sun to the scene
        scene.add(sun);

        // create a fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var mercuryOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the mercuryOrbitPoint planet
        mercuryOrbitPoint.position.x = 20;
        mercuryOrbitPoint.position.y = 3;
        mercuryOrbitPoint.position.z = 2;
        mercuryOrbitPoint.castShadow = true;

        // add the mercuryOrbitPoint planet to the scene
        scene.add(mercuryOrbitPoint);

        // create a second fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var marsOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the second fake planet
        marsOrbitPoint.position.x = 20;
        marsOrbitPoint.position.y = 3;
        marsOrbitPoint.position.z = 2;
        marsOrbitPoint.castShadow = true;

        // add the second fake planet to the scene
        scene.add(marsOrbitPoint);

        // create a third fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var venusOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        venusOrbitPoint.position.x = 20;
        venusOrbitPoint.position.y = 3;
        venusOrbitPoint.position.z = 2;
        venusOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(venusOrbitPoint);

        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var jupiterOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        jupiterOrbitPoint.position.x = 20;
        jupiterOrbitPoint.position.y = 3;
        jupiterOrbitPoint.position.z = 2;
        jupiterOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(jupiterOrbitPoint);

        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var saturnOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        saturnOrbitPoint.position.x = 20;
        saturnOrbitPoint.position.y = 3;
        saturnOrbitPoint.position.z = 2;
        saturnOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(saturnOrbitPoint);

        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var uranusOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        uranusOrbitPoint.position.x = 20;
        uranusOrbitPoint.position.y = 3;
        uranusOrbitPoint.position.z = 2;
        uranusOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(uranusOrbitPoint);

        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var neptuneOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        neptuneOrbitPoint.position.x = 20;
        neptuneOrbitPoint.position.y = 3;
        neptuneOrbitPoint.position.z = 2;
        neptuneOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(neptuneOrbitPoint);




        // create a second sphere
        var sphereGeometry2 = new THREE.SphereGeometry( scale * .3495, 20, 20);
        var mercuryTexture = THREE.ImageUtils.loadTexture(imageDir + "mercury.jpg")
        var sphereMaterial2 = new THREE.MeshLambertMaterial({map: mercuryTexture, overdraw: 5});
        var mercury = new THREE.Mesh(sphereGeometry2, sphereMaterial2);

        // position the second sphere
        mercury.position.x = -83.2041;
        mercury.position.y = 3;
        mercury.position.z = 2;
        mercury.castShadow = true;

        // add the second sphere to the scene
        scene.add(mercury);

        // create venus
        var sphereGeometry3 = new THREE.SphereGeometry( scale * .8697, 20, 20);
        var venusTexture = THREE.ImageUtils.loadTexture(imageDir + "venus.jpg")
        var sphereMaterial3 = new THREE.MeshLambertMaterial({map : venusTexture});
        var venus = new THREE.Mesh(sphereGeometry3, sphereMaterial3);

        // position venus
        venus.position.x = -155.4599;
        venus.position.y = 3;
        venus.position.z = 2;
        venus.castShadow = true;

        // add venus
        scene.add(venus);

        // create Earth
        var sphereGeometry4 = new THREE.SphereGeometry( scale * .9154, 20, 20);
        var earthTexture = THREE.ImageUtils.loadTexture(imageDir + "earth.jpg")
        var sphereMaterial4 = new THREE.MeshPhongMaterial({map: earthTexture});
        var earth = new THREE.Mesh(sphereGeometry4, sphereMaterial4);

        // position Earth
        earth.position.x = -214.49426;
        earth.position.y = 3;
        earth.position.z = 2;
        earth.castShadow = true;

        // add Earth to the scene
        scene.add(earth);

        // create Earth Moon
        var sphereGeometry4 = new THREE.SphereGeometry( scale * .2154, 20, 20);
        var earthTexture = THREE.ImageUtils.loadTexture(imageDir + "moon.jpg")
        var sphereMaterial4 = new THREE.MeshPhongMaterial({map: earthTexture});
        var earthMoon = new THREE.Mesh(sphereGeometry4, sphereMaterial4);

        // position Earth Moon
        earthMoon.position.x = -232.99426;
        earthMoon.position.y = 3;
        earthMoon.position.z = 2;
        earthMoon.castShadow = true;

        // add Earth Moon to the scene
        scene.add(earthMoon);

        // create Mars
        var sphereGeometry5 = new THREE.SphereGeometry( scale * .4856, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "mars.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var mars = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Mars
        mars.position.x = -327.5002;
        mars.position.y = 3;
        mars.position.z = 2;
        mars.castShadow = true;

        // add Mars
        scene.add(mars);

        // create Jupiter
        var sphereGeometry5 = new THREE.SphereGeometry( scale * 10.2725, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "jupiter.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var jupiter = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Jupiter
        jupiter.position.x = -1118.2915;
        jupiter.position.y = 3;
        jupiter.position.z = 2;
        jupiter.castShadow = true;

        // add Jupiter to the scene
        scene.add(jupiter);

        for(var x = 0; x < 2000; x++){
        	kuiperConstructor()
        }
        for(var x = 0; x < kuiperConstructor.length; i++){
        	scene.add(kuiperConstructor[i])
        }

        // create Saturn
        var sphereGeometry5 = new THREE.SphereGeometry( scale * 8.3653, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "saturn.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var saturn = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Saturn
        saturn.position.x = -2053.7373;
        saturn.position.y = 3;
        saturn.position.z = 2;
        saturn.castShadow = true;

        // add Saturn
        scene.add(saturn);

        // create Uranus
        var sphereGeometry5 = new THREE.SphereGeometry( scale * 3.3723, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "uranus.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var uranus = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Uranus
        uranus.position.x = -4124.9879;
        uranus.position.y = 3;
        uranus.position.z = 2;
        uranus.castShadow = true;

        // add Uranus to the scene
        scene.add(uranus);

        // create Neptune
        var sphereGeometry5 = new THREE.SphereGeometry( scale * .4856, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "neptune.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var neptune = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Neptune
        neptune.position.x = -4471.70	;
        neptune.position.y = 3;
        neptune.position.z = 2;
        neptune.castShadow = true;

        // add Neptune to the scene
        scene.add(neptune);

        // position and point the camera to the center of the scene
        camera.position.x = 1;
        camera.position.y = 40;
        camera.position.z = 300;
        camera.lookAt(scene.position);

        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight("#4D4D4D");
        scene.add(ambientLight);

        // add light source for the sun
        var light = new THREE.PointLight( "white", 1.5, 2500, 100);
        light.position.set( 50, 50, 25 );
        scene.add( light );

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        // call the render function
        var step = 0;

    

        var axes = new THREE.AxisHelper(100);
        scene.add( axes );
        
        // var imagePrefix = imageDir + "hubble";
        // // var directions  = ["right", "left", "top", "bottom", "front", "back"];
        // var imageSuffix = ".jpg";
        // var skyGeometry = new THREE.CubeGeometry( 300000, 300000, 300000 );   
        
        // var materialArray = [];
        // for (var i = 0; i < 6; i++)
        //     materialArray.push( new THREE.MeshBasicMaterial({
        //         map: THREE.ImageUtils.loadTexture( imagePrefix + imageSuffix ),
        //         // between imagePrefix and imageSuffix add '+ direction[i]'
        //         // for six different unique photos with '-right' and '-left' etc in their filepaths
        //         side: THREE.BackSide
        //     }));
        // var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        // var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
        // scene.add( skyBox );

        render();

        function render() {
            // stats.update();
            
            mercuryOrbitPoint.add(mercury)
            venusOrbitPoint.add(venus)
            sun.add(earthMoon)
            sun.add(earth)
            marsOrbitPoint.add(mars)
            jupiterOrbitPoint.add(jupiter)
            saturnOrbitPoint.add(saturn)
            uranusOrbitPoint.add(uranus)
            neptuneOrbitPoint.add(neptune)
            
            // rotate earth 
            mercury.rotation.y += .1/20 / 175.9
            venus.rotation.y += .1/20 / 116.8            
            earth.rotation.y += .1/20
            earthMoon.rotation.y += .1/20
            mars.rotation.y += .1/20 * 1.03
            jupiter.rotation.y += .1/20 * .414
            saturn.rotation.y += .1/20 * .444
            uranus.rotation.y += .1/20 * .718
            neptune.rotation.y += .1/20 * .671

            mercuryOrbitPoint.rotation.y += (.1/20) * 1.607 
            marsOrbitPoint.rotation.y += (.1/20) * .802 
            venusOrbitPoint.rotation.y += (.1/20) * 1.174
            jupiterOrbitPoint.rotation.y += (.1/20) * .434
            saturnOrbitPoint.rotation.y += (.1/20) * .323
            uranusOrbitPoint.rotation.y += (.1/20) * .228
            neptuneOrbitPoint.rotation.y += (.1/20) * .0182


            

            // rotate sun
            sun.rotation.y += .1/20
           


            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
            orbit.update();
        }

 
		$scope.earthView = function(){
			camera.position.x = earth.position.x - 10
        	camera.position.y = earth.position.y
        	camera.position.z = earth.position.z

		}

    }
    window.onload = init;



	
	}])