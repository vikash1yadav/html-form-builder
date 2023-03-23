// For Label
$.each($(".col-11>h3, .col-11>.ors-form-label").not(".text-center"), (index, value) => { console.log(value.innerText) })

// for Keys
var names = document.querySelectorAll("input, textarea");
for (i = 0; i < names.length; i++) {
    console.log(names[i].name)
}

