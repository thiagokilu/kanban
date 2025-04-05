import React, { useState } from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../taskItem/taskitem";
import { PlusCircle } from "lucide-react";

export default function TaskList({
	title,
	taskState,
	onAddTask,
	tasks,
	onTaskUpdate,
	onDeleteTask,
}) {
	const addTask = () => {
		onAddTask("Nova Tarefa", taskState);
	};

	return (
		<div className={`tasklist ${taskState.toLowerCase()}`}>
			<div className="title">{title}</div>
			<div className="content">
				{tasks.map((task) => {
					return (
						<TaskItem
							key={task.id}
							id={task.id}
							title={task.title}
							taskState={task.state}
							onTaskUpdate={onTaskUpdate}
							onDeleteTask={onDeleteTask}
						/>
					);
				})}
				{tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
				<button onClick={addTask} className="btn">
					<PlusCircle />
					Adicionar Tarefa
				</button>
			</div>
		</div>
	);
}

TaskList.propTypes = {
	title: PropTypes.string.isRequired,
	onAddTask: PropTypes.func.isRequired,
	tasks: PropTypes.array.isRequired,
	onTaskUpdate: PropTypes.func.isRequired,
	onDeleteTask: PropTypes.func.isRequired,
};
