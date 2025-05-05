interface UserIterator {
    hasNext(): boolean;
    next(): User;
}

class FriendIterator implements UserIterator {
    private visited: Set<User> = new Set<User>();
    private queue: User[] = [];

    constructor(startUser: User) {
        this.queue.push(startUser);
    }

    hasNext(): boolean {
        return this.queue.length > 0;
    }

    next(): User {
        const currentUser = this.queue.shift()!;

        if (!this.visited.has(currentUser)) {
            this.visited.add(currentUser);

            for (const friend of currentUser.friends) {
                if (!this.visited.has(friend)) {
                    this.queue.push(friend);
                }
            }
        }

        return currentUser;
    }
}

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

    getFriendsIterator(): UserIterator {
        return new FriendIterator(this);
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

function getFriendNetwork(startUser: User) {
    const iterator = startUser.getFriendsIterator();

    while (iterator.hasNext()) {
        const user = iterator.next();
        console.log(`Visiting: ${user.name}`);
    }
}

getFriendNetwork(alice);

export { };
