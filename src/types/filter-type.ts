export enum Filter {
	ALL = 'all',
	ACTIVE = 'active',
	COMPLETED = 'completed'
}

export type FilterActionButtonType = {
	label: string
	filterValue: Filter
}
