import ko from "knockout";

const App = document.querySelector("#app");

function TodoApp() {
  const self = this;

  self.list = ko.observableArray([]);
  self.todo = ko.observable("");

  self.submit = () => {
    self.todo().length && self.list.push(self.todo());
    self.todo("");
  };

  self.remove = (todo, event) => {
    const index = event.target.getAttribute('data-index');
    self.list.splice(index, 1);
  };
}

ko.applyBindings(new TodoApp, App);
