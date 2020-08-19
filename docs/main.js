
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

var app = new Vue({
  el: '#app',
  data: {
    message: '',
    datas: []
  },
  created() {
    // インスタンス作成時に自動的に fetch() する
    this.datas = todoStorage.fetch()
  },
  watch: {
    datas: {
      handler: function(datas){
        todoStorage.save(datas)
      },
      deep: true
    }
  },
  methods:{
    add:function(event, value){
      var comment = this.$refs.comment
      //入力されたデータをdatasへpush
      this.datas.push({
        id: todoStorage.uid++,
        data: comment.value
      })
      //フォーム要素を空にする
      comment.value = ""
    }
  }
})

Vue.component("test",{
  props: ["data"],
  template: "<li> {{ data.text }}</li>"
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