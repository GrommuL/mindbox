import { Filter } from '@/types/filter-type'
import { FrownIcon } from 'lucide-react'

type EmptyCompletedListProps = {
	filter: Filter
}

export const EmptyCompletedList = ({ filter }: EmptyCompletedListProps) => {
	return (
		<section className='mt-[20px] flex flex-1 flex-col items-center gap-y-[10px] text-primary'>
			<FrownIcon size={50} />
			<h2 className='text-center'>{`No ${filter} todos`}</h2>
		</section>
	)
}
