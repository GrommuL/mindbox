import { Dispatch, SetStateAction } from 'react'

import { filterActionButtonList } from '@/constants/filter-action-button-list'
import { Button } from '@/components/button'

import { Filter } from '@/types/filter-type'

type FilterActionProps = {
	filter: Filter
	setFilter: Dispatch<SetStateAction<Filter>>
}

export const FilterActions = ({ setFilter, filter }: FilterActionProps) => {
	const selectFilter = (filter: Filter) => () => setFilter(filter)

	return (
		<div className='ml-auto flex w-full max-w-[300px] items-center'>
			{filterActionButtonList.map(({ label, filterValue }) => (
				<Button
					key={filterValue}
					variant='outline'
					className='flex-1 rounded-none'
					onClick={selectFilter(filterValue)}
					isActive={filter === filterValue}
				>
					{label}
				</Button>
			))}
		</div>
	)
}
