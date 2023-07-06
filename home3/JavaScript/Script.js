function WriteName() {
    let Name = prompt('Ваше имя');
    while (Name == null) {
        Name = prompt('Введите ваше имя:)')
    }
    return Name;
}

function PrintName() {
    let Name = WriteName();
    alert('привет ' + Name);
}