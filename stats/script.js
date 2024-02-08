const eventBus = new EventBus();
const x = new Vue({
  el: "#main",
  data: {
    messages: 0,
  },
  methods: {
    add: function (message) {
      console.log(message, "jh");
      this.messages = message;
    },
  },
  beforeMount() {
    eventBus.subscribe("message", this.add);
  },
  beforeDestroy() {
    eventBus.unsubscribe("message", this.add);
  },
});
