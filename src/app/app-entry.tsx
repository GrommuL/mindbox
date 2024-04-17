import { useEffect, useState } from 'react'

import { CreateTodoInput } from '@/components/create-todo-input'
import { EmptyTodoList } from '@/components/empty-todo-list'
import { TodoList } from '@/components/todo-list'

import { Todo } from '@/types/todo'
import { Filter } from '@/types/filter-type'

import { LOCAL_STORAGE_KEY } from '@/constants/local-storage'
import { getFromLocalStorage } from '@/helpers/get-from-local-storage'
import { saveToLocalStorage } from '@/helpers/save-to-local-storage'

export const AppEntry = () => {
	const [todos, setTodos] = useState<Todo[]>(() => getFromLocalStorage<Todo>(LOCAL_STORAGE_KEY))

	const [filter, setFilter] = useState<Filter>(Filter.ALL)

	useEffect(() => {
		saveToLocalStorage<Todo[]>(LOCAL_STORAGE_KEY, todos)
	}, [todos])

	const addTodo = (todo: Todo) => {
		const isTodoExist = todos.some((todoItem) => todoItem.title === todo.title)

		if (isTodoExist) return

		setTodos((prevTodos) => [todo, ...prevTodos])
	}

	return (
		<main className='flex h-full w-full flex-col items-center justify-center gap-y-[22px] bg-[#101218] bg-world-map bg-center bg-no-repeat px-[20px] text-white'>
			<h1 className='text-[50px] uppercase text-green shadow-md'>Todos</h1>
			<section className='flex h-[600px] w-full max-w-[700px] flex-col justify-between gap-y-[20px] rounded-[8px] border border-border-color px-[20px] py-[30px] backdrop-blur-lg'>
				<CreateTodoInput addTodo={addTodo} />

				{!todos.length ? <EmptyTodoList /> : <TodoList todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />}
			</section>
		</main>
	)
}
