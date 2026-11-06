
const equipment = [
    {id: 1, name: "Laptop", isAvailable: true },
    {id: 2, name: "Projector", isAvailable: false },
    {id: 3, name: "Calculator", isAvailable: true },
    {id: 4, name: "Camera", isAvailable: true },
]

const equipmentList = document.querySelector("#equipment-list");

function renderEquipment() {
    equipmentList.replaceChildren();

    for (const item of equipment) {
        const listItem = document.createElement("li");
        const status = item.isAvailable ? "Available" : "On loan";

        listItem.textContent = `${item.name} - ${status}`;

        const actionButton = document.createElement("button");
        actionButton.type = "button";
        actionButton.textContent = item.isAvailable ? "Borrow" : "Return";

        actionButton.addEventListener("click", () => {
            item.isAvailable = !item.isAvailable;
            renderEquipment();
        });
        
        listItem.append(" ", actionButton); //Leaves a space and then the button to the element 
        equipmentList.append(listItem);
    }
}

renderEquipment();