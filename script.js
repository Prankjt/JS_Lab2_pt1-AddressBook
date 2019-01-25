"use strict";

class Contact {
    constructor(name, email, occupation, phone) {
        this.name = name;
        this.email = email;
        this.occupation = occupation;
        this.phone = phone;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];   
    }
    add(info) {
        this.contacts.push(info);
        // console.log(info);
    }
    deleteAt(index) {
        this.contacts.splice(index , 1, );       
    }
    deletebyName(name) {
        this.contacts.splice(name, 0, );
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
    
}

const book = new AddressBook();
console.log(book);
book.add(new Contact("Kurt", "Kilgore@aol.com", "write", "555-1234"));
book.add(new Contact("Leo", "vitruvianman@aol.com", "artist", "555-0987"));
book.add(new Contact("Mario", "numerounoplum@aol.com", "cousin", "555-4567"));
book.print();

while (true) {
    const choice = prompt("Would you like to Add, Delete, Print, or Quit?");

    if (choice === "add") {
        const name = prompt("Enter name: ");
        const email = prompt("Enter email: ");
        const occupation = prompt("Enter occupation: ");
        const phone = prompt("Enter phone: ");
        book.add(new Contact(name, email, occupation, phone));

    } else if (choice === "delete") {
        const delChoice = prompt("Would you like to delete by index or name?")
            if (delChoice === "name") { 
                const delContact = prompt("Type a name to delete.");
                book.deletebyName(delContact);
            } else if (delChoice === "index") {
            const delContact = prompt("Index to delete?")
            book.deleteAt(delContact)
            }

    } else if (choice === "quit") {
        console.log("Cya later");
        break;

    } else if (choice === "print")
        book.print();

}