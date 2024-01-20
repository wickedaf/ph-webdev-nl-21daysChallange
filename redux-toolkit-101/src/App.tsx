import {
	decrement,
	increment,
	incrementByAmount,
} from "./redux/features/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
	const { count } = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();
	return (
		<div className="flex justify-center items-center">
			<div className="text-center flex justify-center items-center gap-5">
				<button
					className="p-5 border-solid border-2 border-sky-500"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
				<p className="text-center">{count}</p>
				<button
					className="p-5 border-solid border-2 border-sky-500"
					onClick={() => dispatch(incrementByAmount(5))}
				>
					Increment By 5
				</button>
				<button
					className="p-5 border-solid border-2 border-sky-500"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
			</div>
		</div>
	);
}

export default App;
