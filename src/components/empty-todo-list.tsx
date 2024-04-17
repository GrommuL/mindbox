import { ArrowBigUpIcon } from 'lucide-react'

export const EmptyTodoList = () => {
	return (
		<section className='text-primary mt-[20px] flex flex-1 flex-col items-center'>
			<ArrowBigUpIcon size={80} />
			<h2 className='text-center'>
				The todo list is empty.
				<br />
				Create a new todo to start your day with productivity!
			</h2>
		</section>
	)
}
