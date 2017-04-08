// UserSignIns = new Mongo.Collection( 'user-sign-ins' );



class User {
  constructor(doc) {
    _.extend(this, doc);
  }
  makeNoise() {
    console.log(this.sound);
  }
}
// Define a collection that uses `Animal` as its document.
Users = new Mongo.Collection('users', {
  transform: (doc) => new User(doc)
});

Users.allow({
  insert(name, place) {
    return true
  },
  update() {
    // When we will ALLOW updates on the client.
  },
  remove() {
    // When we will ALLOW removes on the client.
  }
});
// Create an animal and call its `makeNoise` method.
					