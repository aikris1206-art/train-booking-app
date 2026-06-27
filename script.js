function searchTrain(){

    let result = document.getElementById("results");

    result.innerHTML = `
        <div class="train">
            <h3>12345 Superfast Express</h3>
            <p>Departure: 08:00 AM</p>
            <p>Arrival: 02:00 PM</p>
            <button>Book Now</button>
        </div>

        <div class="train">
            <h3>54321 Rajdhani Express</h3>
            <p>Departure: 10:00 AM</p>
            <p>Arrival: 04:00 PM</p>
            <button>Book Now</button>
        </div>
    `;
}
