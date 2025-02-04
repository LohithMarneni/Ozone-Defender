function handleFormSubmit(event) {
    event.preventDefault();
}

let electIP, lpgIP, caolIP, airIP, railIP, metroIP, busIP, carIP, petrolIP, dieselIP, cngIP, mealIP, totalEmission, totalEmi;

function calculator() {
    console.log("Submit Clicked!!");
   
    electIP = document.getElementById("elect").value;
    lpgIP = document.getElementById("lpg").value;
    caolIP = document.getElementById("coal").value;
    airIP = document.getElementById("air").value;
    railIP = document.getElementById("rail").value;
    metroIP = document.getElementById("metro").value;
    busIP = document.getElementById("bus").value;
    carIP = document.getElementById("car").value;
    petrolIP = document.getElementById("petrol").value;
    dieselIP = document.getElementById("diesel").value;
    cngIP = document.getElementById("cng").value;
    mealIP = document.querySelector('input[name="food"]:checked');
    console.log("Selected Food:", mealIP.value);

    if (mealIP == veg) {
        totalEmission = (electIP * 0.00071) + (lpgIP * 0.00207) + (caolIP * 0.0025) + (airIP * 0.000121) + (railIP * 0.0078 / 1000) + (metroIP * 0.0139 / 1000) + (busIP * 0.054 / 1000) + (carIP * 0.1431 / 1000) + (2.176) + (petrolIP * 2.34 / 1000) + (dieselIP * 2.71 / 1000) + (cngIP * 2.07 / 1000);
    } else if (mealIP == vegan) {
        totalEmission = (electIP * 0.00071) + (lpgIP * 0.00207) + (caolIP * 0.0025) + (airIP * 0.000121) + (railIP * 0.0078 / 1000) + (metroIP * 0.0139 / 1000) + (busIP * 0.054 / 1000) + (carIP * 0.1431 / 1000) + (2.019) + (petrolIP * 2.34 / 1000) + (dieselIP * 2.71 / 1000) + (cngIP * 2.07 / 1000);
    } else {
        totalEmission = (electIP * 0.00071) + (lpgIP * 0.00207) + (caolIP * 0.0025) + (airIP * 0.000121) + (railIP * 0.0078 / 1000) + (metroIP * 0.0139 / 1000) + (busIP * 0.054 / 1000) + (carIP * 0.1431 / 1000) + (3.017) + (petrolIP * 2.34 / 1000) + (dieselIP * 2.71 / 1000) + (cngIP * 2.07 / 1000);
    }

    totalEmi = totalEmission.toFixed(2);
    let target1 = document.getElementsByClassName("opBox1")[0];
    let target2 = document.getElementsByClassName("opBox1")[1];
    target1.innerHTML = "Your approximate Carbon Footprint ";
    target2.innerHTML = +totalEmi + " tonnes";

    const electdt = electIP * 0.00071 * 1000000;
    var fuelfooddt = (lpgIP * 0.00207) + (caolIP * 0.0025) * 1000000;
    const airdt = (airIP * 0.000121) * 1000000;
    var raildt = (railIP * 0.0078 / 1000) * 1000000;
    var metrodt = (metroIP * 0.0139 / 1000) * 1000000;
    var busdt = (busIP * 0.054 / 1000) * 1000000;
    var publicdt = raildt + metrodt + busdt + airdt;
    var cardt = (carIP * 0.1431 / 1000) * 1000000;
    var petroldt = (petrolIP * 2.34 / 1000) * 1000000;
    var dieseldt = (dieselIP * 2.71 / 1000) * 1000000;
    var cngdt = (cngIP * 2.07 / 1000) * 1000000;
    var fueldt = fuelfooddt + petroldt + dieseldt + cngdt;

    // Data for labels and items
    let labels = ['elect', 'fuel', 'public transport', 'car', 'fuel'];
    let itemdata = [electdt, fueldt, publicdt, cardt, fueldt]; // Convert data to numbers

    // Chart data configuration
    const data = {
        labels: labels,
        datasets: [{
            label: 'Items Data',
            data: itemdata,
            backgroundColor: 'rgb(191, 45, 45)',
        }]
    };

    // Chart configuration
    const config = {
        type: 'line',
        data: data,
    };

    // Create a new chart instance
    const chart = new Chart(
        document.getElementById('myChart1'),
        config
    );

    // Data for labels and items
    let labels2 = ['elect', 'fuel', 'public transport', 'car', 'fuel'];
    let itemdata2 = [electdt, fueldt, publicdt, cardt, fueldt];// Convert data to numbers

    // Chart data configuration
    const data2 = {
        labels: labels2,
        datasets: [{
            label: 'Items Data',
            data: itemdata2,
            backgroundColor: ['rgb(191, 45, 45)', 'rgb(191, 0, 45)', 'rgb(191, 45, 0)', 'rgb(191, 45, 45)', 'rgb(191, 0, 45)', 'rgb(191, 45, 0)', 'rgb(191, 45, 0)'],
        }]
    };

    // Chart configuration
    const config2 = {
        type: 'pie',
        data: data2,
    };

    // Create a new chart instance
    const chart2 = new Chart(
        document.getElementById('myChart2'),
        config2
    );

    // Data for labels and items
    let labels1 = ['yours', 'national average', 'global average'];
    let itemdata1 = [totalEmission, 1.89, 4.66]; // Convert data to numbers

    // Chart data configuration
    const data1 = {
        labels: labels1,
        datasets: [{
            label: 'Items Data',
            data: itemdata1,
            backgroundColor: 'rgb(191, 45, 45)',
        }]
    };

    // Chart configuration
    const config1 = {
        type: 'bar',
        data: data1,
        options: {
            indexAxis: 'y',
            
            elements: {
                bar: {
                    borderWidth: 0,
                }
            },
            responsive: true,
        }
    };

    // Create a new chart instance
    const chart1 = new Chart(
        document.getElementById('myChart3'),
        config1
    );
}

// Get elements
let n0 = document.querySelector(".n0");
let p1 = document.querySelector(".p1");
let n1 = document.querySelector(".n1");
let p2 = document.querySelector(".p2");
let n2 = document.querySelector(".n2");
let p10 = document.querySelector(".p10");
let n10 = document.querySelector(".n10");
let p3 = document.querySelector(".p3");
let n3 = document.querySelector(".n3");
let p4 = document.querySelector(".p4");
let n4 = document.querySelector(".n4");
let p5 = document.querySelector(".p5");
let n5 = document.querySelector(".n5");

let x = document.querySelector(".x");
let homeNav = document.querySelector(".homeNav");
let electricity = document.querySelector(".electricity");
let houseFuel = document.querySelector(".houseFuel");
let fasttravel = document.querySelector(".fasttravel");
let slowtravel = document.querySelector(".slowtravel");
let travelFuel = document.querySelector(".travelFuel");
let meal = document.querySelector(".meal");
let opBox = document.querySelector(".opBox");
let ipBox = document.querySelector(".ipBox");

// NEXT BUTTONS
n1.addEventListener('click', function(event) {
    x.style.display = "none"
    electricity.style.display = "none";
    houseFuel.style.display = "block";
});
n2.addEventListener('click', function(event) {
    houseFuel.style.display = "none";
    fasttravel.style.display = "block";
});
n10.addEventListener('click', function(event) {
    fasttravel.style.display = "none";
    slowtravel.style.display = "block";
});
n3.addEventListener('click', function(event) {
    slowtravel.style.display = "none";
    travelFuel.style.display = "block";
});
n4.addEventListener('click', function(event) {
    travelFuel.style.display = "none";
    meal.style.display = "block";
});
n5.addEventListener('click', function(event) {
    ipBox.style.display = "none";
    opBox.style.display = "block";
});

// PREVIOUS BUTTONS
p2.addEventListener('click', function(event) {
    houseFuel.style.display = "none";
    electricity.style.display = "block";
    x.style.display = "block";
});
p10.addEventListener('click', function(event) {
    fasttravel.style.display = "none";
    houseFuel.style.display = "block";
});
p3.addEventListener('click', function(event) {
    slowtravel.style.display = "none";
    fasttravel.style.display = "block";
});
p4.addEventListener('click', function(event) {
    travelFuel.style.display = "none";
    slowtravel.style.display = "block";
});
p5.addEventListener('click', function(event) {
    meal.style.display = "none";
    travelFuel.style.display = "block";
});

