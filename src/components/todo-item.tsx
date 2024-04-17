import { Todo } from '@/types/todo'
import clsx from 'clsx'

type TodoItemProps = {
	todo: Todo
	toggleTodoCompletion: (id: number) => void
}

export const TodoItem = ({ todo, toggleTodoCompletion }: TodoItemProps) => {
	const { id, isCompleted, title } = todo
	return (
		<div className='rounded-[8px] border border-border-color bg-transparent px-[16px] py-[13px] '>
			<div className='flex items-center gap-x-[10px]'>
				<button
					className={clsx(
						'relative aspect-square w-[22px] rounded-full border border-border-color',
						isCompleted &&
							'before:absolute before:bottom-[50%] before:right-[50%] before:aspect-square before:w-[14px] before:translate-x-[50%] before:translate-y-[50%] before:rounded-full before:bg-green'
					)}
					onClick={() => toggleTodoCompletion(id)}
				></button>
				<p className={clsx('select-none', isCompleted && 'text-green')}>{title}</p>
			</div>
		</div>
	)
}
