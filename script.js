"use strict";


/* Here the function is an object constructor, and its properties and methods are declared inside it by prefixing them with the keyword "this." Objects defined using an object constructor are then expressed using the new keyword. Notice how we're able to easily define multiple instances of contact, each with its own name- that's the flexibility object constructor brings to custom objects. Constructors create the blueprints for objects, not the object itself. */

class Contact { //creates a class called "Contact"
    constructor(name, email, occupation, phone) {
        this.name = name;                          //"this" the name property of this object
        this.email = email;                       // email argument assigned to email property of object (=this.)
        this.occupation = occupation;
        this.phone = phone;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];   //Properties []= array to be filled by data
    }
    add(info) {               // Method add with info as parameter
        this.contacts.push(info);   /* this refers to the owner object contacts; "push" array method of adding contents to the end of the array */
        // console.log(info);
    }
    deleteAt(index) {     //Method deleteAt with index as parameter
        this.contacts.splice(index , 1, );     //this refers to the owner object contacts; "splice" is the array method of adding or removing contents 
    }
    deletebyName(name) {     //Method deletebyName with name as parameter
        this.contacts.splice(name, 0, );   //this refers to the owner object contacts; "splice" is the array method for adding or removing contents
    }
    print() {                //Method print 
        for (let i = 0; i < this.contacts.length; i++) { //keyword = "for", ()= condition
            console.log(this.contacts[i]); // code to execute during loop, prints the input in the parantheses
        }
    }
    
}

const book = new AddressBook();
console.log(book);  //prints the input in the paratheses
book.add(new Contact("Kurt", "Kilgore@aol.com", "write", "555-1234"));
book.add(new Contact("Leo", "vitruvianman@aol.com", "artist", "555-0987"));
book.add(new Contact("Mario", "numerounoplum@aol.com", "cousin", "555-4567"));
book.print();   // object name.method name, to use the method

while (true) {          // Begin while loop, the code will continue to operate as long as the condition holds true
    const choice = prompt("Would you like to Add, Delete, Print, or Quit?");

    if (choice === "add") {     //"if" = keyword, ()=condition to hold true
        const name = prompt("Enter name: "); //prompt method that displays a dialog box asking for user input, constant variable with variable name
        const email = prompt("Enter email: ");
        const occupation = prompt("Enter occupation: ");
        const phone = prompt("Enter phone: ");
        book.add(new Contact(name, email, occupation, phone)); // object name.method name, to use the method

    } else if (choice === "delete") {  //"else if" = keyword, ()=condition to hold true
        const delChoice = prompt("Would you like to delete by index or name?")
            if (delChoice === "name") { //"if" = keyword, ()=condition to hold true
                const delContact = prompt("Type a name to delete.");
                book.deletebyName(delContact); // object name.method name, to run the method
            } else if (delChoice === "index") {  //"else if" = keyword, ()=condition to hold true
            const delContact = prompt("Index to delete?")
            book.deleteAt(delContact); // object name.method name, to run the method
            }

    } else if (choice === "quit") {  //"else if" = keyword, ()=condition to hold true
        console.log("Cya later");  //prints the string in the paratheses
        break;

    } else if (choice === "print")  //"else if" = keyword, ()=condition to hold true
        book.print(); // object name.method name, to run the method

}