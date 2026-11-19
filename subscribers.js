
// Get elements from HTML
const subscriberList = document.getElementById("subscriberList");
const totalSubscribers = document.getElementById("totalSubscribers");
const emptyMessage = document.getElementById("emptyMessage");

// Get subscribers saved in Local Storage
const subscribers = JSON.parse(
    localStorage.getItem("subscribers")
) || [];

// Display total number of subscribers
totalSubscribers.textContent = subscribers.length;

// Check if there are subscribers
if (subscribers.length === 0) {

    emptyMessage.textContent = "No subscribers yet.";

} else {

    // Display each subscriber
    subscribers.forEach(function(subscriber) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = subscriber.name;

        const emailCell = document.createElement("td");
        emailCell.textContent = subscriber.email;

        row.appendChild(nameCell);
        row.appendChild(emailCell);

        subscriberList.appendChild(row);

    });

}
