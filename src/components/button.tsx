import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonProps = {
	variant: 'outline' | 'normal'
	isActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, children, variant, isActive, ...restButtonProps }: ButtonProps) => {
	const buttonVariant = {
		normal: 'bg-[#54B163] text-[#175610]',
		outline: 'hover:text-[#175610] bg-transparent text-primary-dark '
	}[variant]
	return (
		<button
			className={clsx(
				'rounded-[4px] border border-transparent px-[8px] py-[4px] transition-opacity delay-100 hover:opacity-90',
				buttonVariant,
				isActive && '!text-[#175610]',
				[className]
			)}
			{...restButtonProps}
		>
			{children}
		</button>
	)
}
