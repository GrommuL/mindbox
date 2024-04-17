import { useState, KeyboardEvent, ChangeEvent } from 'react'
import { XIcon } from 'lucide-react'

import type { Todo } from '@/types/todo'
import { KeyEvent } from '@/types/key-event'

type CreateTodoInputProps = {
	addTodo: (todo: Todo) => void
}

export const CreateTodoInput = ({ addTodo }: CreateTodoInputProps) => {
	const [inputValue, setInputValue] = useState<string>('')

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const trimmedInputValue = event.target.value.trimStart()

		setInputValue(trimmedInputValue)
	}

	const clearInputValue = () => setInputValue('')

	const createTodoFromInput = () => {
		if (!inputValue) return

		const newTodo: Todo = {
			id: Date.now(),
			title: inputValue,
			isCompleted: false
		}

		addTodo(newTodo)

		setInputValue('')
	}

	const KeyEventAction: Record<KeyEvent, () => void> = {
		[KeyEvent.ENTER]: createTodoFromInput,
		[KeyEvent.ESCAPE]: clearInputValue
	}

	const handleKeyEvent = ({ key }: KeyboardEvent<HTMLInputElement>) => {
		if (key === 'Enter' || key === 'Escape') {
			const keyAction = KeyEventAction[key as KeyEvent]

			if (keyAction) {
				keyAction()
			}
		}
	}

	return (
		<label className='relative'>
			<input
				onChange={handleInputChange}
				onKeyDown={handleKeyEvent}
				value={inputValue}
				className='border-primary placeholder:text-primary text-green w-full rounded-lg border bg-transparent py-[14px] pl-[8px] pr-[40px] outline-none focus:shadow-md'
				type='text'
				placeholder='What needs to be done?'
			/>
			{inputValue.length > 0 && (
				<button
					className='text-green border-border-color absolute right-[7px] top-[15px] flex items-center justify-center rounded-[4px] border p-[4px]'
					onClick={clearInputValue}
				>
					<XIcon size={18} />
				</button>
			)}
		</label>
	)
}
