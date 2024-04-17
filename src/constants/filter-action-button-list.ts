import { Filter, FilterActionButtonType } from '@/types/filter-type'

export const filterActionButtonList: FilterActionButtonType[] = [
	{
		label: 'All',
		filterValue: Filter.ALL
	},
	{
		label: 'Active',
		filterValue: Filter.ACTIVE
	},
	{
		label: 'Completed',
		filterValue: Filter.COMPLETED
	}
]
