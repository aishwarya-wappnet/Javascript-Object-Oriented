class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message, className){
        const div = document.createElement('div');

        // Add classname
        div.className = `alert ${className}`

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');

        // get form
        const form = document.querySelector('#book-form');

        // insert element

        container.insertBefore(div, form);

        // timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove(); // tr -> tbody
        }
    }
}

// Event Listening

document.getElementById('book-form').addEventListener('submit', function(e){
    // get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // create book object
    const book = new Book(title, author, isbn);

    // create ui object
    const ui = new UI();

    // validate
    if(title === '' || author === '' || isbn === ''){
        // show error
        ui.showAlert('Please fill all fields', 'error');
    }else{

    // add book to list
    ui.addBookToList(book);

    // show success
    ui.showAlert('Book Added', 'success');

    // clear fields
    ui.clearFields();
    }
    e.preventDefault();
});

// Event listening for delete
document.getElementById('book-list').addEventListener('click', function(e){

    // instantiate UI
    const ui = new UI();

    // delete book
    ui.deleteBook(e.target);

    // show message
    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
});



