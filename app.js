
const STORAGE_KEY = "equipment-loan-control:equipment";




const defaultEquipment = [
    {id: 1, name: "Laptop", isAvailable: true },
    {id: 2, name: "Projector", isAvailable: false },
    {id: 3, name: "Calculator", isAvailable: true },
    {id: 4, name: "Camera", isAvailable: true },
];

const savedEquipment = localStorage.getItem(STORAGE_KEY);

const equipment = 
    savedEquipment === null
        ? defaultEquipment
        : JSON.parse(savedEquipment);


const equipmentList = document.querySelector("#equipment-list");

function saveEquipment() {
    const serializedEquipment = JSON.stringify(equipment);

    localStorage.setItem(STORAGE_KEY, serializedEquipment)
}

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
            saveEquipment();
            renderEquipment();
        });
        
        listItem.append(" ", actionButton); //Leaves a space and then the button to the element 
        equipmentList.append(listItem);
    }
}

renderEquipment();