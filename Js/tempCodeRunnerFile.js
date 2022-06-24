let lists = {
    'AndhraPradesh': 'Hyderabad',
    'Telengana': 'Hyderabad',
    'Delhi': 'NewDelhi',
    'Tamilnadu': 'Chennai',
    'Karnataka': 'Banglore',

    selector: function () {
        var mylist = document.getElementById("myList");

        document.getElementById("favourite").value = lists['Andhrapradesh'];
        // mylist.options[mylist.selectedIndex].text; -->
    }
};

console.log(mylist.options[mylist.selectedIndex].text);


