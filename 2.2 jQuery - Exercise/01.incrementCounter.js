function increment() {
    let container = $('selector');
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    //Text area formation
    textArea.val(0);
    textArea.addClass('counter');
    text.attr('disabled', true);

    //Buttons formation
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    //List formation
    list.addClass('results');
    
    //Events
    $(incrementBtn).on('click', function () {
        textArea.val(+textArea.val() + 1);        
    });
    $(addBtn).on('click', function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.append(list);
    });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    list.appendTo(fragment);
}
