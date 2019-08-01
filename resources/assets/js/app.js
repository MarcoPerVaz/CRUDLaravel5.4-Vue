//var urlUsers = 'https://randomuser.me/api/?results=10'; //Sitio web https://randomuser.me
var urlUsers = 'https://jsonplaceholder.typicode.com/users'; //Sitio web https://jsonplaceholder.typicode.com/users
new Vue({
  el: '#main',
    created: function(){
      this.getUsers();
    },
    data: {
      lists: [],
    },
    methods: {
      getUsers: function(){
        axios.get(urlUsers).then(response => {
          this.lists = response.data;
        });
      }
    }
});
