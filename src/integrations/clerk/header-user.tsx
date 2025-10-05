import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton
} from '@clerk/clerk-react'

export default function HeaderUser() {
	return (
		<>
			<SignedIn>
				<div className='flex flex-row items-center gap-2 text-sm'>
					<UserButton />
					Account
				</div>
			</SignedIn>
			<SignedOut>
				<SignInButton />
			</SignedOut>
		</>
	)
}
