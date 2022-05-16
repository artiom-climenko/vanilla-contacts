let contacts = [
  {id: 1, name: 'Becky Zulau', company: 'Google', age: 36, gender: 'Woman'},
  {id: 2, name: 'Lynette Barton', company: 'Facebook', age: 21, gender: 'Woman'},
  {id: 3, name: 'Renee Mayer', company: 'Google', age: 29, gender: 'Woman'},
  {id: 4, name: 'Edwin Grimes', company: 'Amazon', age: 21, gender: 'Man'},
  {id: 5, name: 'Janie Graham', company: 'Amazon', age: 23, gender: 'Woman'},
  {id: 6, name: 'Julia Haag', company: 'Google', age: 46, gender: 'Woman'},
  {id: 7, name: 'Gertrude Mertz', company: 'Facebook', age: 24, gender: 'Woman'},
  {id: 8, name: 'Teri Armstrong', company: 'Facebook', age: 54, gender: 'Woman'},
  {id: 9, name: 'Benjamin Fadel', company: 'Google', age: 18, gender: 'Man'},
  {id: 10, name: 'Harvey Adams', company: 'Amazon', age: 24, gender: 'Man'}
];

function saveFirstContactsToLocalStorage(contacts) {
  let parseContacts = JSON.parse(localStorage.getItem('contacts'))
  let stringifyContacts = JSON.stringify(contacts);

  if(parseContacts === null) {
    localStorage.setItem('contacts', stringifyContacts)
  }
}

saveFirstContactsToLocalStorage(contacts);

let allContacts = getAllContactsFromLocalStorage();

function getAllContactsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('contacts'));
}

function saveAllContactsToLocalStorage(contacts) {
  let stringifyContacts = JSON.stringify(contacts);
  localStorage.setItem('contacts', stringifyContacts);
}

function saveContacts(contacts) {
  allContacts = contacts;
  saveAllContactsToLocalStorage(contacts);
}

let main = document.querySelector('.main');

function renderContact(contact) {
  return `<div class="contactWrapper">
            <img src="images/avatar.svg" alt="Avatar" width="80" class="contactAvatar">
            <div class="contactMainInformation">
              <div class="contactName clamp">${contact.name}</div>
              <div class="contactCompany clamp">${contact.company}</div>
            </div>
            <div class="contactAge clip">Age: ${contact.age}</div>
            <div class="contactGender clip">Gender: ${contact.gender}</div>
            <button 
              class="contactChange btn" 
              data-bs-toggle="modal" 
              data-bs-target="#editContactModal" 
              onclick="callEditContactModal(${contact.id})"
            >
              <img src="images/change-icon.svg" alt="Change" width="20">
            </button>
            <button 
              class="contactDelete btn" 
              data-bs-toggle="modal" 
              data-bs-target="#deleteContactModal"
              onclick="callConfirmDeleteModal(${contact.id})"
            >
              <img src="images/delete-icon.svg" alt="Delete" width="20">
            </button>
          </div>`;
}

function renderContacts(contacts) {
  return contacts.map(contact => renderContact(contact));
}

function displayContacts() {
  main.innerHTML = renderContacts(allContacts).join('');
}

displayContacts();

function createContact(event) {
  event.preventDefault();

  let newContact = {
    id: + new Date(),
    name: event.target.elements.contactName.value,
    company: event.target.elements.contactCompany.value,
    age: event.target.elements.contactAge.value,
    gender: event.target.elements.contactGender.value
  };

  saveContacts([...allContacts, newContact]);
  displayContacts();

  document.getElementById('addContact').reset();
}

function callEditContactModal(contactId) {
  let contact = allContacts.find(item => item.id === contactId);
  document.getElementById('editContactId').value = contact.id;
  document.getElementById('editContactName').value = contact.name;
  document.getElementById('editContactCompany').value = contact.company;
  document.getElementById('editContactAge').value = contact.age;
  document.getElementById('editContactGender').value = contact.gender;
}

function editContact(event) {
  event.preventDefault();

  let modifiedContact = {
    id: +event.target.elements.editContactId.value,
    name: event.target.elements.editContactName.value,
    company: event.target.elements.editContactCompany.value,
    age: +event.target.elements.editContactAge.value,
    gender: event.target.elements.editContactGender.value
  };

  let newContacts = allContacts.map(element => element.id === modifiedContact.id ? modifiedContact : element);
  saveContacts(newContacts);
  displayContacts();
}

function callConfirmDeleteModal(contactId) {
  let contact = allContacts.find(item => item.id === contactId);
  document.getElementById('deleteContactId').value = contact.id;
}

function deleteContact(event) {
  event.preventDefault();
  let deleteContactId = +document.getElementById('deleteContactId').value;
  let newContacts = allContacts.filter(element => element.id !== deleteContactId);
  saveContacts(newContacts);
  displayContacts();
}