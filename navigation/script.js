const eventBus = new EventBus();

const increment = (e) =>
  eventBus.emmit("message", document.querySelector("#search").value);

document.querySelector("#increment").addEventListener("click", increment);
