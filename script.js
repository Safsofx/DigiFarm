const crops = [];

function plantCrop() {
    const crop = {
        id: crops.length + 1,
        name: 'Wheat',
        plantedAt: Date.now(),
        harvestTime: 30000 // 30 seconds for testing
    };
    crops.push(crop);
    updateUI();
}

function updateUI() {
    const cropList = document.getElementById('crops');
    cropList.innerHTML = '';
    crops.forEach(crop => {
        const remainingTime = (crop.plantedAt + crop.harvestTime - Date.now()) / 1000;
        cropList.innerHTML += `<p>${crop.name} - Harvest in: ${remainingTime.toFixed(1)}s</p>`;
    });
}

setInterval(updateUI, 1000);

function connectPiNetwork() {
    console.log('Connecting to Pi Network...');
    // TODO: Add Pi Testnet authentication and transactions here
}
function connectPiNetwork() {
    Pi.authenticate(["username", "payments"], function(auth) {
        console.log("Pi User:", auth.user);
        alert("Welcome, " + auth.user.username);
    }, function(error) {
        console.error("Authentication failed:", error);
    });
}
