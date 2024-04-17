import { Dispatch, SetStateAction } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { TodoItem } from '@/components/todo-item'

import { Todo } from '@/types/todo'
import { Filter } from '@/types/filter-type'
import { FilterActions } from './filter-actions'
import { EmptyCompletedList } from './empty-completed-list'
import { Button } from './button'

type TodoListProps = {
	todos: Todo[]
	filter: Filter
	setTodos: Dispatch<SetStateAction<Todo[]>>
	setFilter: Dispatch<SetStateAction<Filter>>
}

export const TodoList = ({ todos, setTodos, filter, setFilter }: TodoListProps) => {
	const [parent] = useAutoAnimate()

	const filteredTodos = todos.filter((todo) => {
		switch (filter) {
			case Filter.ALL:
				return true
			case Filter.ACTIVE:
				return !todo.isCompleted
			case Filter.COMPLETED:
				return todo.isCompleted
			default:
				return false
		}
	})

	const clearAllCompletedTodos = () => {
		setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted))
		setFilter(Filter.ALL)
	}

	const toggleTodoCompletion = (id: number) => {
		setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
	}

	return (
		<>
			{!filteredTodos.length ? (
				<EmptyCompletedList filter={filter} />
			) : (
				<div ref={parent} className='flex h-full flex-col gap-y-[15px] overflow-y-scroll px-[10px]'>
					{filteredTodos.map((todo) => (
						<TodoItem key={todo.id} todo={todo} toggleTodoCompletion={toggleTodoCompletion} />
					))}
				</div>
			)}
			<div className='flex items-center justify-between text-[15px]'>
				{filteredTodos.length > 0 && <span className=' min-w-[150px] text-primary-dark'>{`${filteredTodos.length} items left`}</span>}
				<FilterActions setFilter={setFilter} filter={filter} />

				<Button variant='outline' onClick={clearAllCompletedTodos}>
					Clear completed
				</Button>
			</div>
		</>
	)
}
