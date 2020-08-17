var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    datas: [
      { text: "data1"},
      { text: "data2"},
      { text: "data3"}
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