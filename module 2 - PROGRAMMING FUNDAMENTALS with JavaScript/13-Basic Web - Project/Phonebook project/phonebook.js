// чрез файловата система достъпваме db.json, където се пазят записите, които сме напаравили в указателя, за да не се трият на всяко рестартиране на сървъра
const fs = require('fs');
const phonebookJson = fs.readFileSync('db.json'); 
const phonebook = JSON.parse(phonebookJson, null, 2)   //това ни е указателят

function getContacts() {                  //създаваме функция, с която да достъпваме указателят
	return phonebook.slice();
}

function addContact(contact) {
	phonebook.push(contact);
	let jsonData = JSON.stringify(phonebook, null, 2);
	fs.writeFileSync('db.json', jsonData);
}

function hasContact(contact) {     
	const contactExists = phonebook.some(x => x.name == contact.name && x.number == contact.number);
	return contactExists;
}

module.exports = {             // позволяваме функциите да се ползват в други файлове
	getContacts,
	addContact,
	hasContact,
}