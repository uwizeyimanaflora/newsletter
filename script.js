
/* ==================================
   SUBSCRIBE FORM
================================== */

const form = document.getElementById("subscribeForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();

    let subscribers = JSON.parse(
        localStorage.getItem("subscribers")
    ) || [];

    const alreadyExists = subscribers.some(function(subscriber) {
        return subscriber.email === email;
    });

    if (alreadyExists) {
        message.textContent = "This email is already subscribed.";
        message.style.color = "red";
        return;
    }

    subscribers.push({
        name: name,
        email: email
    });

    localStorage.setItem("subscribers", JSON.stringify(subscribers));

    localStorage.setItem("currentSubscriber", JSON.stringify({
        name: name,
        email: email
    }));

    message.textContent =
        "Thank you, " + name + "! You have subscribed successfully.";

    message.style.color = "green";

    form.reset();

    displaySubscriberStatus();
});


/* ==================================
   SUBSCRIBER STATUS
================================== */

function displaySubscriberStatus() {
    const currentSubscriber = JSON.parse(
        localStorage.getItem("currentSubscriber")
    );

    const statusMessage = document.getElementById("subscriberStatus");

    if (!statusMessage) {
        return;
    }

    if (currentSubscriber) {
        statusMessage.className = "subscriber-status member";

        statusMessage.innerHTML =
            "<strong>SUBSCRIBER</strong><br>" +
            "Welcome, " + currentSubscriber.name +
            "! Thank you for joining Daily Updates. You are now one of our subscribers.";

    } else {
        statusMessage.className = "subscriber-status visitor";

        statusMessage.innerHTML =
            "<strong>VISITOR</strong><br>" +
            "You are not subscribed yet. Subscribe today to join our Daily Updates community!";
    }
}

displaySubscriberStatus();


/* ==================================
   ANIMATION EFFECTS
================================== */

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

let revealObserver;

if (!reduceMotion && "IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
        function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
}

function observeReveal(element) {
    if (revealObserver) {
        element.classList.add("reveal");
        revealObserver.observe(element);
    }
}

document.querySelectorAll(
    "section:not(#home), .update-card"
).forEach(observeReveal);


/* ==================================
   DISPLAY LATEST UPDATES
================================== */

const updatesContainer = document.querySelector(".updates-container");

function displayUpdates() {
    if (!updatesContainer) {
        return;
    }

    let updates = JSON.parse(
        localStorage.getItem("updates")
    ) || [];

    updatesContainer.querySelectorAll(".admin-update").forEach(
        function(card) {
            card.remove();
        }
    );

    updates.forEach(function(update) {
        const card = document.createElement("div");
        card.className = "update-card admin-update";

        const title = document.createElement("h3");
        title.textContent = update.title;

        const category = document.createElement("p");
        category.textContent = "Category: " + update.category;

        const description = document.createElement("p");
        description.textContent = update.description;

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);

        if (update.link) {
            const link = document.createElement("a");
            link.href = update.link;
            link.textContent = "Read More";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            card.appendChild(link);
        }

        observeReveal(card);
        updatesContainer.appendChild(card);
    });
}

displayUpdates();
