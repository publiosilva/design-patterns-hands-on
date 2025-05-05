class User {
    name: string;
    friends: User[];

    constructor(name: string) {
        this.name = name;
        this.friends = [];
    }

    addFriend(friend: User) {
        this.friends.push(friend);
    }
}

function getFriendNetwork(startUser: User, visited: Set<User> = new Set<User>()) {
    if (visited.has(startUser)) {
        return;
    }

    console.log(`Visiting: ${startUser.name}`);
    visited.add(startUser);

    for (const friend of startUser.friends) {
        getFriendNetwork(friend, visited);
    }
}

const alice = new User("Alice");
const bob = new User("Bob");
const carol = new User("Carol");
const dave = new User("Dave");
const john = new User("John");

alice.addFriend(bob);
bob.addFriend(carol);
carol.addFriend(dave);
dave.addFriend(alice); // cycle
dave.addFriend(john);

getFriendNetwork(alice);

export { };
