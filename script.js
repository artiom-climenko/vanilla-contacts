let contacts = [
  {id: 1, name: 'Becky Zulau', company: 'Google', age: 36, gender: 'Women'},
  {id: 2, name: 'Lynette Barton', company: 'Facebook', age: 21, gender: 'Women'},
  {id: 3, name: 'Renee Mayer', company: 'Google', age: 29, gender: 'Women'},
  {id: 4, name: 'Edwin Grimes', company: 'Amazon', age: 21, gender: 'Men'},
  {id: 5, name: 'Janie Graham', company: 'Amazon', age: 23, gender: 'Women'},
  {id: 6, name: 'Julia Haag', company: 'Google', age: 46, gender: 'Women'},
  {id: 7, name: 'Gertrude Mertz', company: 'Facebook', age: 24, gender: 'Women'},
  {id: 8, name: 'Teri Armstrong', company: 'Facebook', age: 54, gender: 'Women'},
  {id: 9, name: 'Benjamin Fadel', company: 'Google', age: 18, gender: 'Man'},
  {id: 10, name: 'Harvey Adams', company: 'Amazon', age: 24, gender: 'Man'}
]

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
            <button class="contactChange">
              <img src="images/change-icon.svg" alt="Change" width="20">
            </button>
            <button class="contactDelete">
              <img src="images/delete-icon.svg" alt="Delete" width="20">
            </button>
          </div>`
}

function renderContacts(contacts) {
  return contacts.map(contact => renderContact(contact));
}

main.innerHTML = renderContacts(contacts).join('');