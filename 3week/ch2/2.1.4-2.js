// var relationship1 = {
//   name: 'zero',
//   friends: ['nero', 'hero', 'xero'],
//   logFriends: function () {
//     var that = this; 
//     // relationship1을 가리키는 this를 that에 저장
//     this.friends.forEach(function (friend) {
//       console.log(that.name, friend);
//     });
//   },
// };

var name2 = 'math';
var array = ['one','two','three'];

const relationship2 = {
  name: name2,
  friends: array,
  logFriends : () => {
    var that = this; 
    // relationship2을 가리키는 this를 that에 저장
    this.friends.forEach(friend => {
      console.log(that.name, friend);
    });
  },
};

// relationship1.logFriends();
console.log("=========");
relationship2.logFriends();