interface User {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: User = {
  name: "Monster",
  age: 30,
  getMessage() {
    return "Hello" + name;
  },
};

const user2: User = {
  name: "Jack",
  getMessage() {
    return "Hello" + name;
  }
}