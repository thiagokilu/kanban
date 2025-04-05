import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import TaskList from "./components/tasklist/tasklist";
import "./App.css";

let idAcc = 0;
const generateId = () => {
	idAcc = idAcc + 1;
	return idAcc;
};

export default function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = (title, state) => {
		console.log("Função sendo chamada em App");
		const newTask = {
			id: generateId(),
			title,
			state,
		};
		setTasks((existingTasks) => [...existingTasks, newTask]);
	};

	const updateTask = (id, title, state) => {
		setTasks((existingTasks) =>
			existingTasks.map((task) =>
				task.id === id ? { ...task, title, state } : task,
			),
		);
	};

	const deleteTask = (id) => {
		setTasks((existingTasks) => existingTasks.filter((task) => task.id !== id));
	};

	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<TaskList
					title="Pendente"
					onAddTask={addTask}
					taskState="Pendente"
					tasks={tasks.filter((t) => t.state === "Pendente")}
					onTaskUpdate={updateTask}
					onDeleteTask={deleteTask}
				/>

				<TaskList
					title="Fazendo"
					onAddTask={addTask}
					taskState="Fazendo"
					tasks={tasks.filter((t) => t.state === "Fazendo")}
					onTaskUpdate={updateTask}
					onDeleteTask={deleteTask}
				/>

				<TaskList
					title="Completa"
					onAddTask={addTask}
					taskState="Completa"
					tasks={tasks.filter((t) => t.state === "Completa")}
					onTaskUpdate={updateTask}
					onDeleteTask={deleteTask}
				/>
			</div>
		</div>
	);
}
