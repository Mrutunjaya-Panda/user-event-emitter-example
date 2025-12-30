# User Event Emitter Example (Node.js)

A simple Node.js project that demonstrates how to create and listen to custom events using the built-in `EventEmitter` class.

This example shows how to emit an event (`goalReached`) when a fitness goal is reached and listen for it with a callback.

---

## 📌 Features

- Uses Node.js **EventEmitter**
- Emits a custom event (`goalReached`)
- Listens to the event and outputs a message
- Simple console demonstration

---

## 🛠️ Getting Started

### 🔹 Prerequisites

Make sure you have **Node.js** installed on your machine.

---

## ▶ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/Mrutunjaya-Panda/user-event-emitter-example.git
2. Go to the project directory:
   ```bash
   cd user-event-emitter-example
3. Run the code:
   ```bash
   node index.js
   
📄 Explanation

This project demonstrates Node.js event handling using:
```
1. A class FitnessTracker extends EventEmitter.

2. An exercise is added with .addExercise().

3. When the goal is reached, the goalReached event is emitted.

4. A listener logs a message when the event occurs.

```

📁 Project Structure
```
user-event-emitter-example/
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
📌 Notes

This is a sample project to demonstrate custom events in Node.js.

No external dependencies are required.

🚀 License

This project is open-source and free to use!

## 👤 Author

**Mrutunjaya Panda**
