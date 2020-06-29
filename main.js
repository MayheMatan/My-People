const people = [];

const renderPeople = peopleArray => {
    const source = $("#people-template").html();
    const template = Handlebars.compile(source);
    const peopleHTML = template({ peopleArray });
    $("#container").append(peopleHTML);
};

$.get('https://randomuser.me/api/?results=10', response => {
    for (let person of response.results) {
        people.push({ name: person.name.first + " " + person.name.last, email: person.email });
    }
    renderPeople(people);
});