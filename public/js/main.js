angular.module('Stars', [])

angular.module('Stars')
	.controller("MainController", ["$scope", function($scope){
		
		

			function init() {

        

        // var stats = initStats();

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, .1, 320000);

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer({antialias:true});

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

       
        var imageDir = "/img/"

        // create a sun
        var sphereGeometry = new THREE.SphereGeometry(100, 100, 100);
        var sunTexture = THREE.ImageUtils.loadTexture(imageDir + "sun.jpg")
        var sphereMaterial = new THREE.MeshBasicMaterial({map : sunTexture});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the sphere
        sphere.position.x = 20;
        sphere.position.y = 3;
        sphere.position.z = 2;
        sphere.castShadow = true;

        // add the sphere to the scene
        scene.add(sphere);

        // create a fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var fake = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the fake planet
        fake.position.x = 20;
        fake.position.y = 3;
        fake.position.z = 2;
        fake.castShadow = true;

        // add the fake planet to the scene
        scene.add(fake);

        // create a second fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var fake2 = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the second fake planet
        fake2.position.x = 20;
        fake2.position.y = 3;
        fake2.position.z = 2;
        fake2.castShadow = true;

        // add the second fake planet to the scene
        scene.add(fake2);

        // create a third fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var fake3 = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        fake3.position.x = 20;
        fake3.position.y = 3;
        fake3.position.z = 2;
        fake3.castShadow = true;

        // add the second third planet to the scene
        scene.add(fake3);




        // create a second sphere
        var sphereGeometry2 = new THREE.SphereGeometry( 3 *.3495, 20, 20);
        var mercuryTexture = THREE.ImageUtils.loadTexture(imageDir + "mercury.jpg")
        var sphereMaterial2 = new THREE.MeshLambertMaterial({map: mercuryTexture, overdraw: 5});
        var sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);

        // position the second sphere
        sphere2.position.x = -105;
        sphere2.position.y = 3;
        sphere2.position.z = 2;
        sphere2.castShadow = true;

        // add the second sphere to the scene
        scene.add(sphere2);

        // create venus
        var sphereGeometry3 = new THREE.SphereGeometry( 3 *.8697, 20, 20);
        var venusTexture = THREE.ImageUtils.loadTexture(imageDir + "venus.jpg")
        var sphereMaterial3 = new THREE.MeshLambertMaterial({map : venusTexture});
        var venus = new THREE.Mesh(sphereGeometry3, sphereMaterial3);

        // position venus
        venus.position.x = -120;
        venus.position.y = 3;
        venus.position.z = 2;
        venus.castShadow = true;

        // add venus
        scene.add(venus);

        // create Earth
        var sphereGeometry4 = new THREE.SphereGeometry( 3 *.9154, 20, 20);
        var earthTexture = THREE.ImageUtils.loadTexture(imageDir + "earth.jpg")
        var sphereMaterial4 = new THREE.MeshPhongMaterial({map: earthTexture});
        var earth = new THREE.Mesh(sphereGeometry4, sphereMaterial4);

        // position Earth
        earth.position.x = -180;
        earth.position.y = 3;
        earth.position.z = 2;
        earth.castShadow = true;

        // add Earth to the scene
        scene.add(earth);

        // create Earth Moon
        var sphereGeometry4 = new THREE.SphereGeometry( 3 *.2154, 20, 20);
        var earthTexture = THREE.ImageUtils.loadTexture(imageDir + "moon.jpg")
        var sphereMaterial4 = new THREE.MeshPhongMaterial({map: earthTexture});
        var earthMoon = new THREE.Mesh(sphereGeometry4, sphereMaterial4);

        // position Earth Moon
        earthMoon.position.x = -185;
        earthMoon.position.y = 3;
        earthMoon.position.z = 2;
        earthMoon.castShadow = true;

        // add Earth Moon to the scene
        scene.add(earthMoon);

        // create Mars
        var sphereGeometry5 = new THREE.SphereGeometry( 3 *.4856, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "mars.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var mars = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Mars
        mars.position.x = -280;
        mars.position.y = 3;
        mars.position.z = 2;
        mars.castShadow = true;

        // add Mars
        scene.add(mars);

        // create Jupiter
        var sphereGeometry5 = new THREE.SphereGeometry( 3 *10.2725, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "jupiter.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var jupiter = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Jupiter
        jupiter.position.x = -380;
        jupiter.position.y = 3;
        jupiter.position.z = 2;
        jupiter.castShadow = true;

        // add Jupiter to the scene
        scene.add(jupiter);

        // create Saturn
        var sphereGeometry5 = new THREE.SphereGeometry( 3 *8.3653, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "saturn.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var sphere5 = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Saturn
        sphere5.position.x = -480;
        sphere5.position.y = 3;
        sphere5.position.z = 2;
        sphere5.castShadow = true;

        // add Saturn
        scene.add(sphere5);

        // create Uranus
        var sphereGeometry5 = new THREE.SphereGeometry( 3 *3.3723, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "uranus.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var sphere5 = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Uranus
        sphere5.position.x = -580;
        sphere5.position.y = 3;
        sphere5.position.z = 2;
        sphere5.castShadow = true;

        // add Uranus to the scene
        scene.add(sphere5);

        // create Neptune
        var sphereGeometry5 = new THREE.SphereGeometry( 3 *.4856, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "neptune.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var sphere5 = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Neptune
        sphere5.position.x = -680;
        sphere5.position.y = 3;
        sphere5.position.z = 2;
        sphere5.castShadow = true;

        // add Neptune to the scene
        scene.add(sphere5);

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

        // var controls = new function () {
        //     this.rotationSpeed = 0.02;
        //     this.bouncingSpeed = 0.03;
        // };

        // var gui = new dat.GUI();
        // gui.add(controls, 'rotationSpeed', 0, 0.5);
        // gui.add(controls, 'bouncingSpeed', 0, 0.5);

    

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
            sphere.add(earthMoon)
            sphere.add(earth)
            fake.add(sphere2)
            fake3.add(venus)
            // rotate earth
            earth.rotation.y += .1 / 20

            earthMoon.rotation.y += .1/20

            fake.rotation.y += .1/5
            fake2.rotation.y += .1/35
            fake3.rotation.y += .1/50

            fake2.add(mars)
          

            // rotate sun
            sphere.rotation.y += .1/20
            // sphere.rotation.y += controls.rotationSpeed;
            // sphere.rotation.z += controls.rotationSpeed;

            // rotate mercury
            // sphere2.rotation.x += controls.rotationSpeed;
            // sphere2.rotation.y += controls.rotationSpeed;
            // sphere2.rotation.z += controls.rotationSpeed;


            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
            orbit.update();
        }

        // function initStats() {

        //     var stats = new Stats();

        //     stats.setMode(0); // 0: fps, 1: ms

        //     // Align top-left
        //     stats.domElement.style.position = 'absolute';
        //     stats.domElement.style.left = '0px';
        //     stats.domElement.style.top = '0px';

        //     document.getElementById("Stats-output").appendChild(stats.domElement);

        //     return stats;
        // }
		$scope.earthView = function(){
			camera.position.x = earth.position.x - 10
        	camera.position.y = earth.position.y
        	camera.position.z = earth.position.z

		}

    }
    window.onload = init;



	
	}])