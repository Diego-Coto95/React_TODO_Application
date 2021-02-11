import React from "react";
import shortid from "shortid";
//include images into your bundle
//create your first component
export function Home() {
	const [tarea, setTarea] = React.useState("");
	const [arrayTareas, setArrayTareas] = React.useState([]);
	const agregarTarea = e => {
		e.preventDefault();
		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);
		setTarea("");
	};

	// const DeleteItems = indexItem => {
	// 	setArrayTareas(prevState =>
	// 		prevState.filter((arrayTareas, index) => index !== indexItem)
	// 	);
	// 	// console.log(indexItem);
	// };
	// function delList(index) {
	// 	if (index > -1) {
	// 		const filterData = arrayTareas.filter(
	// 			item => item !== arrayTareas[index]
	// 		);
	// 		setArrayTareas(filterData);
	// 	}
	// }

	const Delete = id => {
		for (let i = 0; i < arrayTareas.length; i++) {
			if (arrayTareas[i].id === id) {
				arrayTareas.splice(i, 1);
				setArrayTareas([...arrayTareas]);
			}
		}
	};

	return (
		<div className="container">
			<h1 className="text-center">TODO WITH REACT</h1>
			<div className="row">
				<div className="col-12">
					<ul className="list-group">
						<form onSubmit={agregarTarea}>
							<li className="list-group-item">
								<input
									type="text"
									className="form-control mb-2"
									placeholder="Enter task"
									onChange={e => setTarea(e.target.value)}
									value={tarea}
								/>
							</li>
						</form>
						{arrayTareas.map(item => (
							<li className="list-group-item" key={item.id}>
								<span className="lead">{item.nombreTarea}</span>
								<button
									type="button"
									className="ml-2 mb-1 close"
									data-dismiss="toast"
									aria-label="Close"
									onClick={() => Delete(item.id)}>
									<span aria-hidden="true">&times;</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
