
// Get form elements
const updateForm = document.getElementById("updateForm");

const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const linkInput = document.getElementById("link");

const adminMessage = document.getElementById("adminMessage");

// Get elements for managing updates
const adminUpdatesList = document.getElementById("adminUpdatesList");
const noUpdatesMessage = document.getElementById("noUpdatesMessage");

// Function to display all published updates
function displayAdminUpdates() {

    let updates = JSON.parse(
        localStorage.getItem("updates")
    ) || [];

    // Clear previous updates
    adminUpdatesList.innerHTML = "";

    if (updates.length === 0) {

        noUpdatesMessage.textContent = "No updates published yet.";

    } else {

        noUpdatesMessage.textContent = "";

        updates.forEach(function(update) {

            const card = document.createElement("div");
            card.className = "update-card";

            const title = document.createElement("h3");
            title.textContent = update.title;

            const category = document.createElement("p");
            category.textContent = "Category: " + update.category;

            const description = document.createElement("p");
            description.textContent = update.description;

            card.appendChild(title);
            card.appendChild(category);
            card.appendChild(description);

            // Display link if available
            if (update.link) {

                const link = document.createElement("a");
                link.href = update.link;
                link.textContent = "Read More";
                link.target = "_blank";
                link.rel = "noopener noreferrer";

                card.appendChild(link);
            }

            // Create Delete Button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", function() {

                const confirmDelete = confirm(
                    "Are you sure you want to delete this update?"
                );

                if (confirmDelete) {

                    let currentUpdates = JSON.parse(
                        localStorage.getItem("updates")
                    ) || [];

                    currentUpdates = currentUpdates.filter(function(item) {
                        return item.id !== update.id;
                    });

                    localStorage.setItem(
                        "updates",
                        JSON.stringify(currentUpdates)
                    );

                    displayAdminUpdates();

                }
            });

            card.appendChild(deleteButton);

            adminUpdatesList.appendChild(card);

        });
    }
}

// Publish a new update
updateForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = titleInput.value.trim();
    const category = categoryInput.value;
    const description = descriptionInput.value.trim();
    const link = linkInput.value.trim();

    let updates = JSON.parse(
        localStorage.getItem("updates")
    ) || [];

    const newUpdate = {
        id: Date.now(),
        title: title,
        category: category,
        description: description,
        link: link
    };

    updates.push(newUpdate);

    localStorage.setItem(
        "updates",
        JSON.stringify(updates)
    );

    adminMessage.textContent = "Update published successfully!";
    adminMessage.style.color = "green";

    updateForm.reset();

    // Refresh the updates list
    displayAdminUpdates();

});

// Display updates when admin page opens
displayAdminUpdates();
