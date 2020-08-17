var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!'
  }
})

Vue.component("test",{
  props: ["data"],
  template: "<li> {{ data.text }}</li>"
})

var app2 = new Vue({
  el: '#app-2',
  data:{
    datas: [
      { id: 1, text: "data1"},
      { id: 2, text: "data2"},
      { id: 3, text: "data3"}
    ]
  }
})

var app3 = new Vue({
  el: "#app-3",
  data:{
    seen: false
  },
  methods:{
    showMessage: function(){
      this.seen = !this.seen
    }
  }
})