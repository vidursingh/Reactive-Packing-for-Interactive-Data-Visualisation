Matter.use('matter-attractors');
var Vector = Matter.Vector;




// var municipalityCodes = ["101", "751", "851", "461", "561", "630"] 
// var municipalityCoordinates = {"101":[1000,510], "751":[680,410], "851":[686,180], "461":[710,595], "561":[490,600], "630":[630,550]}
// var municipalityNames = {"101": "Copenhagen", "751":"Aarhus", "851": "Aalborg", "461": "Odense", "561": "Esbjerg","630": "Vejle"}

var municipalityCodes = ["101", "665", "661", "657", "630", "621", "615", "607", "580", "575", "573", "563", "561", "550", "540", "530", "510", "492",
 "482", "480", "479", "461", "671", "707", "710", "727", "999", "860", "851", "849", "846", "840", "825", "820", "813", "810",
 "450", "791", "779", "773", "766", "760", "756", "751", "746", "741", "740", "730", "787", "440", "706", "420", "223", "219",
 "217", "210", "201", "190", "187", "185", "183", "173", "230", "169", "165", "163", "161", "159", "157", "155", "153", "151",
 "147", "430", "167", "240", "175", "411", "250", "410", "400", "390", "376", "370", "360", "340", "336", "330", "329", "350",
 "253", "320", "316", "306", "270", "269", "265", "260", "259", "326"]

var municipalityCoordinates = {
    "101":[0,0], "665":[0,0], "661":[0,0], "657":[0,0], "630":[0,0], "621":[0,0], "615":[0,0], "607":[0,0], "580":[0,0], "575":[0,0], "573":[0,0], "563":[0,0], "561":[0,0], "550":[0,0], "540":[0,0], "530":[0,0], "510":[0,0], "492":[0,0],
    "482":[0,0], "480":[0,0], "479":[0,0], "461":[0,0], "671":[0,0], "707":[0,0], "710":[0,0], "727":[0,0], "999":[0,0], "860":[0,0], "851":[0,0], "849":[0,0], "846":[0,0], "840":[0,0], "825":[0,0], "820":[0,0], "813":[0,0], "810":[0,0],
    "450":[0,0], "791":[0,0], "779":[0,0], "773":[0,0], "766":[0,0], "760":[0,0], "756":[0,0], "751":[0,0], "746":[0,0], "741":[0,0], "740":[0,0], "730":[0,0], "787":[0,0], "440":[0,0], "706":[0,0], "420":[0,0], "223":[0,0], "219":[0,0],
    "217":[0,0], "210":[0,0], "201":[0,0], "190":[0,0], "187":[0,0], "185":[0,0], "183":[0,0], "173":[0,0], "230":[0,0], "169":[0,0], "165":[0,0], "163":[0,0], "161":[0,0], "159":[0,0], "157":[0,0], "155":[0,0], "153":[0,0], "151":[0,0],
    "147":[0,0], "430":[0,0], "167":[0,0], "240":[0,0], "175":[0,0], "411":[0,0], "250":[0,0], "410":[0,0], "400":[0,0], "390":[0,0], "376":[0,0], "370":[0,0], "360":[0,0], "340":[0,0], "336":[0,0], "330":[0,0], "329":[0,0], "350":[0,0],
    "253":[0,0], "320":[0,0], "316":[0,0], "306":[0,0], "270":[0,0], "269":[0,0], "265":[0,0], "260":[0,0], "259":[0,0], "326":[0,0]
  };

  var municipalityNames = {
  "101":"Municipality 101", "665":"Municipality 665", "661":"Municipality 661", "657":"Municipality 657", "630":"Municipality 630", "621":"Municipality 621", "615":"Municipality 615", "607":"Municipality 607", "580":"Municipality 580", "575":"Municipality 575", "573":"Municipality 573", "563":"Municipality 563", "561":"Municipality 561", "550":"Municipality 550", "540":"Municipality 540", "530":"Municipality 530", "510":"Municipality 510", "492":"Municipality 492",
  "482":"Municipality 482", "480":"Municipality 480", "479":"Municipality 479", "461":"Municipality 461", "671":"Municipality 671", "707":"Municipality 707", "710":"Municipality 710", "727":"Municipality 727", "999":"Municipality 999", "860":"Municipality 860", "851":"Municipality 851", "849":"Municipality 849", "846":"Municipality 846", "840":"Municipality 840", "825":"Municipality 825", "820":"Municipality 820", "813":"Municipality 813", "810":"Municipality 810",
  "450":"Municipality 450", "791":"Municipality 791", "779":"Municipality 779", "773":"Municipality 773", "766":"Municipality 766", "760":"Municipality 760", "756":"Municipality 756", "751":"Municipality 751", "746":"Municipality 746", "741":"Municipality 741", "740":"Municipality 740", "730":"Municipality 730", "787":"Municipality 787", "440":"Municipality 440", "706":"Municipality 706", "420":"Municipality 420", "223":"Municipality 223", "219":"Municipality 219",
  "217":"Municipality 217", "210":"Municipality 210", "201":"Municipality 201", "190":"Municipality 190", "187":"Municipality 187", "185":"Municipality 185", "183":"Municipality 183", "173":"Municipality 173", "230":"Municipality 230", "169":"Municipality 169", "165":"Municipality 165", "163":"Municipality 163", "161":"Municipality 161", "159":"Municipality 159", "157":"Municipality 157", "155":"Municipality 155", "153":"Municipality 153", "151":"Municipality 151",
  "147":"Municipality 147", "430":"Municipality 430", "167":"Municipality 167", "240":"Municipality 240", "175":"Municipality 175", "411":"Municipality 411", "250":"Municipality 250", "410":"Municipality 410", "400":"Municipality 400", "390":"Municipality 390", "376":"Municipality 376", "370":"Municipality 370", "360":"Municipality 360", "340":"Municipality 340", "336":"Municipality 336", "330":"Municipality 330", "329":"Municipality 329", "350":"Municipality 350",
  "253":"Municipality 253", "320":"Municipality 320", "316":"Municipality 316", "306":"Municipality 306", "270":"Municipality 270", "269":"Municipality 269", "265":"Municipality 265", "260":"Municipality 260", "259":"Municipality 259", "326":"Municipality 326"
  };

//read data
async function getData(filepath){
    const response = await fetch(filepath)
                           .then((response) => response.json())
                           //.then((data) => console.log(data))
                           //.then((output) => {obj = output})
//    const json = response.json()

    return response
}


let timeData = getData("uniqueTimes.json")
let processedData = getData("processedData.json")


temp = timeData.then(function(result) {
    console.log("inside here!!!!!!!!!!!!!!")
    console.log(result)
});


let counter = {counter : 100}


const distBetween = (a,b) =>{
    return Vector.magnitude(Vector.sub(a,b))
}


var anchors = {}

var objs = {}

function inBounds(o,render){
    if(o == undefined) return false;
    return (!(o.x < 0 || o.x > render.canvas.width || o.y < 0 || o.y > render.canvas.height))
}



var params = {
    height: window.innerHeight * 0.95,
    width: window.innerWidth * 0.8,
    numberOfObjects:13,
    minBoxDim: 10,
    maxBoxDim: 50,
    boxWidth: 100,
    boxHeight: 50,

    forces: {
        maxRepelDist: 500,
        repelExp: 2,
        repelMult: 100,
        minAttractDist: 1000,
        attractExp: 2,
        attractMult: 70,
        borderStrength: 10,

        visuals: false
    },

    anchors: {
        maxVel: 0.3,
        waitTime: 100,
        maxForce: 3,
        pull: 8,
        range: 30,
        threshold: 20
    },

    airFriction: 0.02,
    borderWidth: 2,

    presets: {
        reset: () => {},
        save: () => {},
        load: () => {}
    }
}


var stationary = new Set()


function addGraph(timeData, processedData, divIdDictionary){
    municipalities = Object.keys(divIdDictionary)
    console.log(municipalities);
    dataBoxIds = Object.values(divIdDictionary)
    counterValue = counter.counter
    counter.counter +=1
    currentTime = timeData[counterValue]

    for (let index = 0; index<municipalities.length; index++){
        thisMunicipality = municipalities[index]
        thisMunicipalityName = municipalityNames[thisMunicipality]
        console.log(index, thisMunicipalityName, thisMunicipality)
        thisDataBoxId = dataBoxIds[index]    
        //console.log(thisDataBoxId)
        currentData = processedData[thisMunicipality][currentTime]
        //console.log(currentTime, currentData)
        columns = ["Solar","OfSW_L","OfSW_H","OnSW","Thermal"]

        // create a variable that will hold the loaded data
        thisDataList = []
        for (let i = 0; i< currentData.length; i++) {
            if (i >3){
                thisValue = {letter: columns[i], frequency: currentData[i]/100}
            }
            else{
                thisValue = {letter: columns[i], frequency: currentData[i]}
            }
            thisDataList.push(thisValue)
        }
        data = thisDataList
        

        let margin = {top: -10, right: 20, bottom: 0, left: 50};
        let height = params.boxHeight ;
        let width = params.boxWidth ;
        let svgWidth = width, svgHeight = height;
        height = svgHeight - margin.top - margin.bottom;
        width = svgWidth - margin.left - margin.right;
        


        let x = d3.scaleBand().rangeRound([0, width]).padding(0.1)
        let y = d3.scaleLinear().rangeRound([height, 30]);

        x.domain(columns);
        y.domain([0, 100]);
        console.log(thisDataBoxId, "!!!!!!!!!!!")
        var svg = d3.select("#" + thisDataBoxId)
                    .append("svg")
                    .attr("viewBox", `0 0 ${width} ${height*1.2 - 10}`)
                    //.attr("preserveAspectRatio", "xMinYMin meet")                                
                    .attr('id', thisDataBoxId+"_svg")
                    .attr('height', svgHeight/1.1 )
                    .attr('width', svgWidth/1.1 );
                
        svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
   
        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-25)" );

        svg.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(5));

        let bars = svg.selectAll('.bar')
            .data(data)
            .enter()
            .append("g");

        bars.append('rect')
            .attr('class', 'bar')
            .attr("x", function(d) { return x(d.letter); })
            .attr("y", function(d) { return y(d.frequency); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d.frequency); });
        
        svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2 - 7))
        .attr("text-anchor", "middle")  
        .style("font-size", "12px") 
        .style("text-decoration", "underline")  
        .text("Municipality: " + thisMunicipalityName);
        
}
}

//replace value with value.counter
//update value.counter
function updateGraph(timeData, processedData, divIdDictionary){
    
    dateTimeElement = document.getElementById("my_dataviz")

    municipalities = Object.keys(divIdDictionary)
    dataBoxIds = Object.values(divIdDictionary)
    counterValue = counter.counter
    counter.counter +=1
    currentTime = timeData[counterValue]

    currentDate = currentTime.split("T")[0]
    displayTime = currentTime.split("T")[1].slice(0,8)

    displayString = "Current Date: " + currentDate + "<br />"
    displayString += "Current Time: " + displayTime

    dateTimeElement.innerHTML = displayString;

    for (let index = 0; index<municipalities.length; index++){
        thisMunicipality = municipalities[index]
        thisDataBoxId = dataBoxIds[index]    
        currentData = processedData[thisMunicipality][currentTime]
        columns = ["Solar","OfSW_L","OfSW_H","OnSW","Thermal"]


        let margin = {top: -10, right: 20, bottom: 0, left: 50};
        let svgWidth = params.boxWidth, svgHeight = params.boxHeight;
        let height = svgHeight - margin.top - margin.bottom;
        let width = svgWidth - margin.left - margin.right;


        let x = d3.scaleBand().rangeRound([0, width]).padding(0.1)
        let y = d3.scaleLinear().rangeRound([height, 0]);

        x.domain(columns);
        y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

            
            thisDataList = []
            for (let i = 0; i< currentData.length; i++) {
                if (i >3){
                    thisValue = {letter: columns[i], frequency: currentData[i]/100}
                }
                else{
                    thisValue = {letter: columns[i], frequency: currentData[i]}
                }
                thisDataList.push(thisValue)
            }
            data = thisDataList

            // set the domains of the axes
            x.domain(data.map(function(d) { return d.letter; }));
            y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
                        
            //console.log("!!!!!!!!", value, divId, data)
            // update the bars
            bars = d3.select("#"+thisDataBoxId).selectAll(".bar")
            
            bars.data(data)
            .transition().duration(500)
            .attr("x", function(d) { return x(d.letter); })
            .attr("y", function(d) { return y(d.frequency) + 30; })
            .attr("height", function(d) { return height -30 - y(d.frequency); });
           
            bars.exit().remove();  

    }

};


function setup(){
    gui = new dat.GUI()
 
    init_gui = gui.addFolder('Initial Params')
    force_gui = gui.addFolder('Force Params')
    misc_gui = gui.addFolder('Other Params')
    anch_gui = gui.addFolder('Anchor Params')
    pres_gui = gui.addFolder('Presets')

    init_gui.add(params, 'width').min(100).max(1200).step(100).listen()
    init_gui.add(params, 'height').min(50).max(900).step(50).listen()
    init_gui.add(params, 'minBoxDim').min(10).max(50).step(5).listen()
    init_gui.add(params, 'maxBoxDim').min(50).max(200).step(5).listen()

    init_gui.add(params, 'boxWidth').min(200).max(500).step(50).listen()
    init_gui.add(params, 'boxHeight').min(50).max(300).step(50).listen()

    init_gui.add(params, 'numberOfObjects').min(1).max(50).step(1).listen()
    init_gui.add(params, 'borderWidth').min(0).max(5).step(1).name('Border Thickness').listen()

    init_gui.open()

    force_gui.add(params.forces, 'maxRepelDist').min(0).max(3000).step(100).name('Max Repel Dist').listen()
    force_gui.add(params.forces, 'repelExp').min(1).max(3).step(0.1).listen()
    force_gui.add(params.forces, 'repelMult').min(1).max(200).name('Repulsion const').listen()
    force_gui.add(params.forces, 'minAttractDist').min(0).max(3000).step(100).name('Min Attract Dist').listen()
    force_gui.add(params.forces, 'attractExp').min(1).max(3).step(0.1).listen()
    force_gui.add(params.forces, 'attractMult').min(1).max(200).name('Attraction const').listen()
    force_gui.add(params.forces, 'borderStrength').min(1).max(10).listen()

    force_gui.add(params.forces, 'visuals').listen()

    force_gui.open()

    misc_gui.add(params, 'airFriction').min(0).max(0.5).step(0.01).listen()

    misc_gui.open()

    anch_gui.add(params.anchors, 'pull').min(1).max(20).name('Anchor Pull Strength').listen()
    anch_gui.add(params.anchors, 'maxVel').min(0).max(3).step(0.1).listen()
    anch_gui.add(params.anchors, 'waitTime').min(10).max(1000).step(10).listen()
    anch_gui.add(params.anchors, 'maxForce').min(0).max(20).step(0.1).listen()
    anch_gui.add(params.anchors, 'range').min(0).max(100).step(5).listen()
    anch_gui.add(params.anchors, 'threshold').min(0.1).max(100).step(0.1).listen()

    anch_gui.open()

    pres_gui.add(params.presets, 'reset').listen()
    pres_gui.add(params.presets, 'save').listen()
    pres_gui.add(params.presets, 'load').listen()

    pres_gui.open()


    var divIdDictionary = {}

    for (let i = 0; i < params.numberOfObjects; i++){
        thisCode = municipalityCodes[i]
        thisDivId = "dataBox_" + i;
        divIdDictionary[thisCode] = thisDivId
    }

    var toAdd = document.createDocumentFragment();
    for(var i=0; i < params.numberOfObjects; i++){
        var newDiv = document.createElement('div');
        newDiv.id = 'dataBox_'+i;
        newDiv.className = 'class_dataBox_'+i;
        newDiv.style.position = 'absolute';
        newDiv.style.left = '0px';
        newDiv.style.top = '0px';
        newDiv.style.zIndex = -999;
        toAdd.appendChild(newDiv);
    }
    document.body.appendChild(toAdd);

    startEngine()
    temp1 = timeData.then(function(resultTimeData) {
        temp2 = processedData.then(function(resultProcessedData) {
            setInterval(()=>{updateGraph(resultTimeData, resultProcessedData, divIdDictionary)}, 500)
    });
});

}

const loadEngine = (preset=null) => {
    startEngine(preset)
}


function repel(bodyA,pos,mass){
    // returns force of repulsion
    let dist = Vector.magnitude(Vector.sub(pos,bodyA.position))
    let repelDist = params.forces.maxRepelDist
    // console.log(Math.round(dist),repelDist)
    let repelExp = params.forces.repelExp
    let repelMult = params.forces.repelMult

    // console.log('repelling',bodyA.id)
    var force = Vector.create(0,0)
    if (dist < repelDist){
        force = Vector.mult(Vector.normalise(Vector.sub(pos,bodyA.position)), (-1 * mass * (repelMult/10) / (dist**repelExp)))
        return force
    }

    return Vector.create(0,0)
}

function attract(bodyA,pos,mass){
    // returns force of repulsion
    let dist = Vector.magnitude(Vector.sub(pos,bodyA.position))
    let attractDist = params.forces.minAttractDist
    // console.log(Math.round(dist),repelDist)
    let attractExp = params.forces.attractExp
    let attractMult = params.forces.attractMult

    // console.log('repelling',bodyA.id)
    var force = Vector.create(0,0)
    if (dist > attractDist){
        force = Vector.mult(Vector.normalise(Vector.sub(pos,bodyA.position)), (1 * mass * (attractMult/10) / (dist**attractExp)))
        return force
    }

    return Vector.create(0,0)
}

function distanceBetween(x1,y1,x2,y2){
    distance = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
    return distance
}

function closestCorner(xbox, ybox, height, width, x2, y2){
    let upperLeftCorner = [xbox-width/2, ybox-height/2];
    let upperRightCorner = [xbox+width/2, ybox-height/2];
    let lowerLeftCorner = [xbox-width/2, ybox+height/2];
    let lowerRightCorner = [xbox+width/2, ybox+height/2];
    let corners = [upperLeftCorner, upperRightCorner, lowerLeftCorner, lowerRightCorner]
    let minDist = 1000000000  
//    console.log(corners)
    for (let i = 0; i<corners.length; i++){
        let cornerCoordinates = corners[i]
        // console.log("!!!!!!!!!!!!!", corners[i], i)
        let x1 = cornerCoordinates[0]
        let y1 = cornerCoordinates[1]
        let distance = distanceBetween(x1,y1,x2,y2)
        // console.log(distance < minDist)
        if (distance < minDist){
            minDist = distance;
            minX = x1;
            minY = y1;
        }
    }
    //console.log(minX, minY)
    return ([minX, minY])

}

function connect(ctx,bodyA,bodyB,mag, attractRepelFlag){
    if(!params.forces.visuals) return;
    if(attractRepelFlag == "repel"){
        ctx.strokeStyle = "rgb(239,138,98)"
    }
    else{
        ctx.strokeStyle = "rgb(103,169,207)"
    }
    // ctx.strokeStyle = "rgb(155, 102, 102)"
    ctx.lineWidth = mag/2
    ctx.beginPath()
    ctx.moveTo(bodyA.position.x,bodyA.position.y)
    ctx.lineTo(bodyB.position.x,bodyB.position.y)
    ctx.closePath()
    ctx.stroke()
}



function startEngine(preset=null){

    let objectHovered = null;

    document.addEventListener("mousemove", (e) => {
            point_x = e.clientX;
            point_y = e.clientY; 
            point = {x: point_x, y:point_y}
//            let object = finalObjects[0]
            object = Matter.Query.point(finalObjects, point)
            if (object.length>0){
                objectHovered = object[0]
                //Matter.Body.scale(hoveredObject, 1.001,1.001);
                //Matter.Body.set(hoveredObject, "inertia", Infinity)
            }
            else{
                objectHovered = null;
            }
            //console.log(hoveredObject)

    });

    document.addEventListener("wheel", function(e) {
        if (objectHovered!=null){
            let div = objs[objectHovered.id].dataDiv

            console.log(div);
            console.log(e);
            if (e.deltaY > 0){
                    scaleFactor = e.deltaY * 0.0005
                    Matter.Body.scale(objectHovered, 1 + scaleFactor,1 + scaleFactor);
                    Matter.Body.set(objectHovered, "inertia", Infinity)
                    svgId = div.id + "_svg"
                    svg = document.getElementById(svgId)
                    svg.setAttribute("height", svg.getAttribute("height")*(1 + scaleFactor)) 
                    svg.setAttribute("width", svg.getAttribute("width")*(1+ scaleFactor)) 
                    console.log(svg.height)
                    console.log(svg);

            }
            if (e.deltaY < 0){
                scaleFactor = e.deltaY * 0.0005
                Matter.Body.scale(objectHovered, 1 + scaleFactor,1 + scaleFactor);
                Matter.Body.set(objectHovered, "inertia", Infinity)
                svgId = div.id + "_svg"
                svg = document.getElementById(svgId)
                svg.setAttribute("height", svg.getAttribute("height")*(1 + scaleFactor)) 
                svg.setAttribute("width", svg.getAttribute("width")*(1+ scaleFactor)) 
                console.log(svg.height)
                console.log(svg);

        }

            // if (e.key == "ArrowDown"){
            //         Matter.Body.scale(objectHovered, 1/1.1, 1/1.1);
            //         Matter.Body.set(objectHovered, "inertia", Infinity)
            //         svgId = div.id + "_svg"
            //         svg = document.getElementById(svgId)
            //         svg.setAttribute("height", svg.getAttribute("height")*(1/1.1)) 
            //         svg.setAttribute("width", svg.getAttribute("width")*(1/1.1)) 
            //     }
        }
    });

    document.addEventListener("keydown", function(e) {
        if (objectHovered!=null){
            let div = objs[objectHovered.id].dataDiv

            console.log(div);
            if (e.key == "ArrowUp"){
                    Matter.Body.scale(objectHovered, 1.1,1.1);
                    Matter.Body.set(objectHovered, "inertia", Infinity)
                    svgId = div.id + "_svg"
                    svg = document.getElementById(svgId)
                    svg.setAttribute("height", svg.getAttribute("height")*1.1) 
                    svg.setAttribute("width", svg.getAttribute("width")*1.1) 
                    console.log(svg.height)
                    console.log(svg);

            }

            if (e.key == "ArrowDown"){
                    Matter.Body.scale(objectHovered, 1/1.1, 1/1.1);
                    Matter.Body.set(objectHovered, "inertia", Infinity)
                    svgId = div.id + "_svg"
                    svg = document.getElementById(svgId)
                    svg.setAttribute("height", svg.getAttribute("height")*(1/1.1)) 
                    svg.setAttribute("width", svg.getAttribute("width")*(1/1.1)) 
                }
        }
    });

    var Engine = Matter.Engine;
    var Render = Matter.Render;
    var Runner = Matter.Runner;
    var Composites = Matter.Composites;
    var Constraint = Matter.Constraint;
    var MouseConstraint = Matter.MouseConstraint;
    var Mouse = Matter.Mouse;
    var Composite = Matter.Composite;
    var Bodies = Matter.Bodies;
    var Body = Matter.Body;

    // create an engine
    var engine = Engine.create()
    var world  = engine.world;
    //engine.enableSleeping = true;
    engine.gravity.y = 0;
    engine.gravity.x = 0;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;  
    // create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: screenWidth,
            height: screenHeight,
            wireframes: false, // <-- important to correctly colour the compound bodies
            background: 'transparent' //'rgb(0,0,0)'
            }
        });

    // const gui = new dat.GUI()
    

    // let height = window.innerHeight * 0.95;
    // let width = window.innerWidth * 0.85;

    // LOAD PRESET --------------------------------------------------------
    var data = null
    var boxes = null
    if(preset!=null){
        
        data = JSON.parse(preset)
        boxes = data.boxes
        for(let key in data.global){
            if(new Set(['forces','anchors','presets']).has(key)) continue
            params[key] = data.global[key]
        }
        for(let key in data.global.forces){
            params.forces[key] = data.global.forces[key]
        }
        for(let key in data.global.anchors){
            params.anchors[key] = data.global.anchors[key]
        }
        
    }

    render.canvas.height = params.height;
    render.canvas.width = params.width;

    const primaryShapes = [];
    const finalObjects = [];
    
    // const params.numberOfObjects = 1;
    let totalPerimeter = 0;
    let totalOccupiedArea = 0;


    var toAdd = document.createDocumentFragment();
    for(var i=0; i < params.numberOfObjects; i++){
        var newDiv = document.createElement('div');
        newDiv.id = 'box'+i;
        newDiv.className = 'class_box'+i;
        toAdd.appendChild(newDiv);
    }
    document.body.appendChild(toAdd);



    for (let i = 0; i < params.numberOfObjects; i++) {

        let boxX = Math.floor(Math.random() * render.canvas.width);
        let boxY = Math.floor(Math.random() * render.canvas.height);
        // let boxWidth = params.minBoxDim + Math.floor(Math.random() * (params.maxBoxDim-params.minBoxDim));
        // let boxHeight = params.minBoxDim + Math.floor(Math.random() * (params.maxBoxDim-params.minBoxDim));
        let boxWidth = params.boxWidth;
        let boxHeight = params.boxHeight;

        if(boxes != null){
            boxX = boxes[i].pos.x
            boxY = boxes[i].pos.y
            boxWidth = boxes[i].dims.w
            boxHeight = boxes[i].dims.h
        }


        totalPerimeter += boxWidth + boxHeight;
        totalOccupiedArea += boxWidth * boxHeight;
        // let vx = Math.floor(Math.random() * 30);
        // vx *= Math.round(Math.random()) ? 1 : -1;
        // let vy = Math.floor(Math.random() * 30);
        // vy *= Math.round(Math.random()) ? 1 : -1;
        // //let mass = Math.floor(Math.random() * 10); //circle
        // let mass = boxWidth * boxHeight;  // rectangle 

        var obj1 = Bodies.rectangle(boxX, boxY, boxWidth, boxHeight,{inertia: Infinity, frictionAir: params.airFriction, density: 1, 
            render: {
                fillStyle: 'rgb(0, 20, 26, 0.2)',
                strokeStyle: '',
                lineWidth: 0,
            } 
        }
        );
        objDetails = [obj1, boxX, boxY, boxWidth, boxHeight]
        primaryShapes.push(objDetails)
        // console.log(primaryShapes)
        // console.log(totalPerimeter)
        // console.log(totalOccupiedArea)
        // console.log(screenHeight*screenWidth)
    }

    const totalArea = screenWidth * screenHeight;
    const totalBlankArea = totalArea - totalOccupiedArea;
//    const borderWidth = 0.5*(((4*totalBlankArea*params.numberOfObjects*4 + totalPerimeter**2)**(0.5) + totalPerimeter)/(2*params.numberOfObjects*4));
    const borderWidth = 20;
    
    // var toAdd = document.createDocumentFragment();
    // for(var i=0; i < params.numberOfObjects; i++){
    //     var newDiv = document.createElement('div');
    //     newDiv.id = 'dataBox_'+i;
    //     newDiv.className = 'class_dataBox_'+i;
    //     newDiv.style.position = 'absolute';
    //     newDiv.style.left = '0px';
    //     newDiv.style.top = '0px';
    //     newDiv.style.zIndex = -999;
    //     toAdd.appendChild(newDiv);
    // }
    // document.body.appendChild(toAdd);


    
    for (let i = 0; i < params.numberOfObjects; i++){
        var obj1 = primaryShapes[i][0];
        var boxX = primaryShapes[i][1];
        var boxY = primaryShapes[i][2];
        var boxWidth = primaryShapes[i][3];
        var boxHeight = primaryShapes[i][4];

        var obj2 = Bodies.rectangle(boxX, boxY, boxWidth+borderWidth, boxHeight+borderWidth,{inertia: Infinity, frictionAir: params.airFriction, density: 1, id: "testInner" + i,
            render: {
                fillStyle: 'rgb(0, 0, 0, 0)',
                strokeStyle: '',
                lineWidth: params.borderWidth,

            }});
        console.log(obj2.type);
        var compoundBody = Body.create({
            class: "target", //add class so that d3.js can access this element
            id: "test" + i,
            parts: [obj2, obj1],
            elem: document.querySelector("#box" + i),
            plugin: {
                attractors: [
                    function(bodyA, bodyB){
                        let magA=0,magB=0
                        let fA = 0;
                        let fB = 0;
                        let flag = "";
                        let bFlag = "";
                        let AFlag = "";
                        // if(bordIDs.has(bodyB.id)) console.log('bord found')
                        if(!bordIDs.has(bodyA.id) && !bordIDs.has(bodyB.id)){
                            if(!bodyA.isStatic){
                                let repA = repel(bodyA,bodyB.position,objs[bodyB.id].mass)
                                let attA = attract(bodyA,bodyB.position,objs[bodyB.id].mass)
                                fA = Vector.add(repA,attA)
                                if (Vector.magnitude(repA) > Vector.magnitude(attA)){
                                    aFlag = "repel"
                                }
                                else{
                                    aFlag = "attract"
                                }

                                magA = Vector.magnitude(fA)
                                Body.applyForce(bodyA, bodyA.position, fA)
                                objs[bodyA.id].repulsion = Vector.add(objs[bodyA.id].repulsion,fA)
                                // console.log('bodyA',bodyA.id)
                            }
                            if(!bodyB.isStatic){
                                let repB = repel(bodyB,bodyA.position,objs[bodyA.id].mass)
                                let attB = attract(bodyB,bodyA.position,objs[bodyA.id].mass)
                                if (Vector.magnitude(repB) > Vector.magnitude(attB)){
                                    bFlag = "repel"
                                }
                                else{
                                    bFlag = "attract"
                                }
                                fB = Vector.add(repB,attB)
                                // console.log(bodyB.mass)
                                magB = Vector.magnitude(fB)
                                Body.applyForce(bodyB, bodyB.position, fB)
                                objs[bodyB.id].repulsion = Vector.add(objs[bodyB.id].repulsion,fB)
                            }
                            if (magA > magB){
                                flag = aFlag
                            }
                            else{
                                flag = bFlag
                            }

                            // console.log(Vector.magnitude(fA), Vector.magnitude(fB));
                            connect(ctx,bodyA,bodyB,Math.max(magA,magB), flag)
                        }

                    },

                    function(bodyA, bodyB){
                        let temp = Vector.create(bodyA.position.x,bodyA.position.y);
                        // return;
                        // Apply force to anchor point
                        if(!bordIDs.has(bodyA.id)){
                            // Body.translate(bodyA, 100)
                            
                            if(objs[bodyA.id].anchor != null){
                                // console.log('drawing')

                                let ang = Vector.angle(bodyA.position,objs[bodyA.id].anchor)
                                let dist = Vector.magnitude(Vector.sub(objs[bodyA.id].anchor,bodyA.position))
                                let c = dist * 1/500*(params.anchors.pull);
                                // let c = 1
                                // bodyA.velocity.x += c*Math.cos(ang)
                                // bodyA.velocity.y += c*Math.sin(ang)
                                Body.applyForce(bodyA, bodyA.position, {x:c*Math.cos(ang),y:c*Math.sin(ang)});

                                ctx.fillStyle = (objs[bodyA.id].anchored) ? 'blue' : 'orange'
                                if(bodyA.isStatic) ctx.fillStyle = 'grey'
                                ctx.beginPath()
                                ctx.arc(bodyA.position.x - params.boxWidth/2,bodyA.position.y-boxHeight/2,5,0,Math.PI*2)
                                ctx.closePath()
                                ctx.fill()

                                  
                                // ctx.lineWidth = 1
                                // ctx.strokeStyle = 'blue'
                                // ctx.setLineDash([1,15])
                                // ctx.beginPath()
                                // ctx.moveTo(bodyA.position.x,bodyA.position.y)
                                // ctx.lineTo(objs[bodyA.id].anchor.x,objs[bodyA.id].anchor.y)
                                // ctx.closePath()
                                // ctx.stroke()
                                // ctx.setLineDash([])

                            }

                            let bodyIndex = parseInt(bodyA.id.split("st")[1])
                            let municipalityCode = municipalityCodes[bodyIndex]
                            //console.log(municipalityCode)
                            let xLocation = municipalityCoordinates[municipalityCode][0]
                            let yLocation = municipalityCoordinates[municipalityCode][1]
                            cornerToAttach = closestCorner(bodyA.position.x, bodyA.position.y, params.boxHeight, params.boxWidth, xLocation, yLocation)
                            cornerToAttachX = cornerToAttach[0];
                            cornerToAttachY = cornerToAttach[1];
                            //console.log("here!!!!!!!!!!!!", cornerToAttach)
                            // ctx.lineWidth = 3
                            // ctx.strokeStyle = 'red'
                            // ctx.setLineDash([1,15])
                            // ctx.beginPath()
                            // ctx.moveTo(cornerToAttachX,cornerToAttachY)
                            // ctx.lineTo(xLocation,yLocation)
                            // ctx.closePath()
                            // ctx.stroke()
                            // ctx.setLineDash([])

//                            if(params.forces.visuals == false){
                                dataDivObject = objs[bodyA.id].dataDiv; 
                                svg = document.getElementById(dataDivObject.id + "_svg")
                                dataDivObject.style.left = bodyA.position.x - parseInt(svg.getAttribute("width"))/2 + "px";
                                dataDivObject.style.top = bodyA.position.y - parseInt(svg.getAttribute("height"))/2 + "px";
//                                return;
//                            };
                            
                            if (params.forces.visuals == true){
                            ctx.fillStyle = 'black'
                            ctx.font = "20px Arial";
                            let d = String(bodyA.id).length * 10000
                            ctx.fillText(bodyA.id, bodyA.position.x-d, bodyA.position.y+5);}
                            // bodyId = bodyA.id;
                            // idNumber = bodyId.slice(-1);
                            // boxId = "dataBox_" + idNumber;
                            // var thisDiv = document.getElementById(boxId);
                            // thisDiv.style.left = bodyA.position.x + "px";
                            // thisDiv.style.top = bodyA.position.y + "px";
                            dataDivObject = objs[bodyA.id].dataDiv; 
                            //console.log(dataDivObject);
//                            dataDivObject.style.left = bodyA.position.x - params.boxWidth/2 + "px";
 //                           dataDivObject.style.top = bodyA.position.y - params.boxHeight/2 + "px";


                        }
                    }
                ],
                details: function(bodyA){
                    document.getElementById('body-details').style.display = (params.forces.visuals) ? 'block' : 'none'
                    document.getElementById(`${bodyA.id}-f`).innerHTML = Math.round(Vector.magnitude(bodyA.force)*10)/10
                    document.getElementById(`${bodyA.id}-v`).innerHTML = Math.round(Vector.magnitude(bodyA.velocity)*10)/10
                    // document.getElementById(`${bodyA.id}-r`).innerHTML = objs[bodyA.id].velCounter

                    objs[bodyA.id].repulsion = Vector.create(0,0)

                },
                bordering: function(o){
                        // console.log('NEWS')
                        if(bordIDs.has(o.id)) return;


                        // REPEL from all four edges
                        let bordMult = 10000

                        // console.log(o.id,objs[o.id])
            
                        // Top
                        let posN = Vector.create(o.position.x,0)
                        let repN = repel(o,posN,params.forces.borderStrength * bordMult)
                        let magN = Vector.magnitude(repN)
                        Body.applyForce(o, o.position, repN)
                        objs[o.id].repulsion = Vector.add(objs[o.id].repulsion,repN)
                        connect(ctx,o,{position:posN},magN, "repel")
            
                        // Bottom
                        let posS = Vector.create(o.position.x,render.canvas.height)
                        let repS = repel(o,posS,params.forces.borderStrength * bordMult)
                        let magS = Vector.magnitude(repS)
                        Body.applyForce(o, o.position, repS)
                        objs[o.id].repulsion = Vector.add(objs[o.id].repulsion,repS)
                        connect(ctx,o,{position:posS},magS, "repel")
            
                        // Left
                        let posW = Vector.create(0,o.position.y)
                        let repW = repel(o,posW,params.forces.borderStrength * bordMult)
                        let magW = Vector.magnitude(repW)
                        Body.applyForce(o, o.position, repW)
                        objs[o.id].repulsion = Vector.add(objs[o.id].repulsion,repW)
                        connect(ctx,o,{position:posW},magW, "repel")
            
                        // Right
                        let posE = Vector.create(render.canvas.width,o.position.y)
                        let repE = repel(o,posE,params.forces.borderStrength * bordMult)
                        let magE = Vector.magnitude(repE)
                        Body.applyForce(o, o.position, repE)
                        objs[o.id].repulsion = Vector.add(objs[o.id].repulsion,repE)
                        connect(ctx,o,{position:posE},magE, "repel")                        
                    },

                anchoring: function(o){
                    if(bordIDs.has(o.id)) return;
                    if(o.isStatic) return;

                    let v = Vector.magnitude(o.velocity)

                    objs[o.id].velCounter = (v < params.anchors.maxVel) ? Math.min(objs[o.id].velCounter + 1, params.anchors.waitTime) : 0
                    objs[o.id].prevV = v

                    let f = Vector.magnitude(o.force)

                    if(objs[o.id].anchor != null){
                        let d = Vector.magnitude(Vector.sub(objs[o.id].anchor,o.position))
                        let temp = (d < params.anchors.range)
                        if(!temp && objs[o.id].anchored) objs[o.id].velCounter = 0
                        objs[o.id].anchored = temp
                        
                    }
                    document.getElementById(`${o.id}-a`).innerHTML = objs[o.id].anchored ? `<b>${o.id}: </b>` : `${o.id}:`

                    if(!objs[o.id].anchored && (objs[o.id].velCounter == params.anchors.waitTime)){
                        objs[o.id].anchor = Vector.clone(o.position)
                        // console.log('new anchor:',objs[o.id].anchor)
                        if(objs[o.id].start == null){
                            objs[o.id].start = Vector.clone(o.position)
                        }
                    }
                },
                threshold: function(o){
                    let id = o.id
                    if(!objs[id].anchored) return;
                    // console.log('hi?')
                    // o.velocity.x = 0
                    // o.velocity.y = 0
                    let f = Vector.magnitude(o.force) - params.anchors.threshold

                    let scale = Math.max(0,f)
                    // if(objs[id].pseudoStatic) scale=0   
                    // console.log(scale)
                    o.force = Vector.mult(Vector.normalise(o.force),scale)

                    
                    


                },
                contain: function(o){
                    if(o.isStatic) return;
                    let id=o.id
                    if(inBounds(objs[o.id].prevLoc,render) && !inBounds(o.position,render)){
                        console.log('gone out')
                    }
                  
                    if(!inBounds(objs[id].prevLoc,render)){
                        console.log('prev out')
                    }
                    
                    if(!stationary.has(o.id)){
                        o.frictionAir = params.airFriction
                    }

                    if(!inBounds(o.position,render)){
                        o.position.x = objs[id].prevLoc.x
                        o.position.y = objs[id].prevLoc.y
                        // o.force = Vector.create(0,0)
                        // o.velocity = Vector.create(0,0)
                    }
                    objs[o.id].prevLoc = Vector.clone(o.position)

                    
                }

            }
        });


        finalObjects.push(compoundBody)
        if(boxes == null){
            objs[compoundBody.id] = {
                start: null,
                anchor: null,
                anchored: false,
                prevV: 0,
                velCounter: 0,
                prevLoc: Vector.create(100,100),
                repulsion: Vector.create(0,0),
                pseudoStatic: false,
                mass: compoundBody.mass,
                dims: {
                    w: boxWidth,
                    h: boxHeight
                },
                dataDiv: document.getElementById("dataBox_" + compoundBody.id.slice(-1))
            }
        }
        else{
            objs[compoundBody.id] = boxes[i]
            Body.setStatic(compoundBody,boxes[i].static)
        }
        //console.log("asdasdasda")
        //console.log(objs)

        document.getElementById('body-details').innerHTML += `<label id='${compoundBody.id}-a'></label>&nbsp;&nbsp;<label>F=</label><span id='${compoundBody.id}-f'></span>&nbsp;&nbsp;&nbsp;&nbsp;<label>V=</label><span id='${compoundBody.id}-v'></span>&nbsp;&nbsp;&nbsp;&nbsp;<label>R=</label><span id='${compoundBody.id}-r'></span><br>`

        
}


    var boundaryUp =   Bodies.rectangle(0 + params.width/2, 0,      params.width, 10, { isStatic: true });
    Body.setStatic(boundaryUp, true)
    var boundaryDown = Bodies.rectangle(0 + params.width/2, params.height, params.width, 10, { isStatic: true });
    Body.setStatic(boundaryDown, true)
    var boundaryLeft = Bodies.rectangle(0, params.height/2, 10, params.height, { isStatic: true });
    Body.setStatic(boundaryLeft, true)
    var boundaryRight = Bodies.rectangle(params.width, params.height/2, 10, params.height, { isStatic: true });
    Body.setStatic(boundaryRight, true)

    boundaryDown.density = Infinity
    console.log(boundaryDown)

    var bordIDs = new Set([boundaryDown.id, boundaryLeft.id, boundaryRight.id, boundaryUp.id])
    


    //     // add mouse control
    var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    Composite.add(world, mouseConstraint);

    Matter.Events.on(mouseConstraint, 'enddrag', e => {
        // console.log('dragged')
        // console.log('Mouse event:',e)
        

        // objs[e.body.id].pseudoStatic = true;
//        console.log(e.body.class)
//        console.log(e.body.id)
        e.body.force.x = 0
        e.body.force.y = 0
        e.body.velocity.x = 0
        e.body.velocity.y = 0
        objs[e.body.id].anchor = Vector.clone(e.body.position)
        objs[e.body.id].anchored = true;
        Body.setStatic(e.body,true)
        // console.log(e.body)
    })

    Matter.Events.on(mouseConstraint, 'startdrag', e => {
        for(let o of finalObjects){
            if(bordIDs.has(o.id)) continue
            if(o.isStatic){
                Body.setStatic(o,false)
                // console.log('unstaticing:',o.id,o.isStatic)
            }
        }
    })

    // keep the mouse in sync with rendering
    render.mouse = mouse;
    // // add all of the bodies to the world
    finalObjects.push(boundaryUp)
    finalObjects.push(boundaryDown)
    finalObjects.push(boundaryLeft)
    finalObjects.push(boundaryRight)

    Composite.add(engine.world, finalObjects);

    // run the renderer
    Render.run(render);

    var divIdDictionary = {}

    for (let i = 0; i < params.numberOfObjects; i++){
        thisCode = municipalityCodes[i]
        thisDivId = "dataBox_" + i;
        divIdDictionary[thisCode] = thisDivId
    }


    temp1 = timeData.then(function(resultTimeData) {
        temp2 = processedData.then(function(resultProcessedData) { 
            addGraph(resultTimeData, resultProcessedData, divIdDictionary);
            })});

    //console.log("woohooooo");
//    console.log(testBodyFinder);


    // create runner
    var runner = Runner.create({
        delta: 1000/60
    });

    var ctx = document.querySelector('canvas').getContext('2d')

    Runner.run(runner,engine)
    

    let ticks = 0
    Matter.Events.on(runner,'tick',e=>{
        if(render.canvas == undefined) return;
        let flag=false;
        ticks = Math.min(10,ticks+1)
        if(ticks == 10) return;
        for(let o of finalObjects){
            if(bordIDs.has(o.id)) continue
            if(o.position.x < 0 || o.position.x > render.canvas.width || o.position.y < 0 || o.position.y > render.canvas.height){
                params.presets.reset()
            }
        }
    })

    params.presets.reset = (preset) => {
        Engine.clear(engine);
        Render.stop(render);
        Runner.stop(runner);
        render.canvas.remove();
        render.canvas = null;
        render.context = null;
        render.textures = {};
        for(let id in objs) delete objs[id]
        document.getElementById('body-details').innerHTML = ''
        console.log('reset clicked');
        // console.log(preset)

        loadEngine(preset)
    }

    console.log(Matter.Composite.allBodies(world));
    var testBodyFinder = Matter.Composite.get(world, "test1", 'body');
    console.log("I am here")
    console.log(testBodyFinder)



    // let button = document.getElementById('reset')
    // button.style.marginTop = render.canvas.height + 'px'
    // button.addEventListener('click', event => {
    //     reset()
    //     loadEngine()
    // });

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    
    function readSingleFile(e) {
        // console.log('reading')
        var file = e.target.files[0];
        if (!file) {
          return;
        }
        // console.log('opening file')
        var reader = new FileReader();
        reader.onload = function(e) {
          var contents = e.target.result;
        //   displayContents(contents);
        // callback(contents)
        // console.log(contents)
        params.presets.reset(contents)
        };
        reader.readAsText(file);
    }
    
    
    document.getElementById('load-file')
    .addEventListener('change',readSingleFile,false)

    params.presets.save = () => {
        let data = {
            global: params,
            boxes: []
        }
        for(let o of finalObjects){
            if(bordIDs.has(o.id)) continue
            let obj = JSON.parse(JSON.stringify(objs[o.id]))
            obj.pos = Vector.clone(o.position)
            obj.static = o.isStatic
            data.boxes.push(obj)
        }

        download(JSON.stringify(data),'test.json')
    }

    params.presets.load = () => {
        document.getElementById('load-file').click()
        // console.log('loading')
            
    }


}






