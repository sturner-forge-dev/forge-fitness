import { SignInButton, useUser } from '@clerk/clerk-react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
	Route as RouteIcon,
	Server,
	Shield,
	Sparkles,
	Waves,
	Zap
} from 'lucide-react'

export const Route = createFileRoute('/')({
	component: App
})

function App() {
	const { isSignedIn } = useUser()
	const features = [
		{
			key: 1,
			icon: <Zap className='w-12 h-12 text-cyan-400' />,
			title: 'Custom Workout Planner',
			description:
				'Design and track personalized workout routines with ease. Tailor exercises, sets, and reps to fit your goals.',
			link: '/workout/'
		},
		{
			key: 2,
			icon: <Server className='w-12 h-12 text-cyan-400' />,
			title: 'Exercise Database',
			description:
				'Access a comprehensive library of exercises with detailed instructions and videos. Stay informed and motivated.',
			link: '/exercise'
		},
		{
			key: 3,
			icon: <RouteIcon className='w-12 h-12 text-cyan-400' />,
			title: 'History',
			description:
				'Track your progress over time with detailed workout history and analytics. Celebrate your achievements and stay on course.',
			link: '/history'
		}
		// {
		// 	key: 4,
		// 	icon: <Shield className='w-12 h-12 text-cyan-400' />,
		// 	title: 'Strongly Typed Everything',
		// 	description:
		// 		'End-to-end type safety from server to client. Catch errors before they reach production.'
		// },
		// {
		// 	key: 5,
		// 	icon: <Waves className='w-12 h-12 text-cyan-400' />,
		// 	title: 'Full Streaming Support',
		// 	description:
		// 		'Stream data from server to client progressively. Perfect for AI applications and real-time updates.'
		// },
		// {
		// 	key: 6,
		// 	icon: <Sparkles className='w-12 h-12 text-cyan-400' />,
		// 	title: 'Next Generation Ready',
		// 	description:
		// 		'Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.'
		// }
	]

	return (
		<div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'>
			<section className='relative py-20 px-6 text-center overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10'></div>
				<div className='relative max-w-5xl mx-auto'>
					<div className='flex items-center justify-center gap-6 mb-6'>
						<img
							src='/tanstack-circle-logo.png'
							alt='TanStack Logo'
							className='w-24 h-24 md:w-32 md:h-32'
						/>
						<h1 className='text-6xl md:text-7xl font-bold text-white'>
							<span className='text-gray-300'>FORGE</span>{' '}
							<span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
								FITNESS
							</span>
						</h1>
					</div>
					<p className='text-2xl md:text-3xl text-gray-300 mb-4 font-light'>
						The no-frills, no-nonsense workout tracker for serious lifters.
					</p>
					<div className='flex flex-col items-center gap-4'>
						{isSignedIn ? (
							<>
								<a
									href='https://tanstack.com/start'
									target='_blank'
									rel='noopener noreferrer'
									className='px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50'
								>
									Documentation
								</a>
							</>
						) : (
							<SignInButton>
								<button className='px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50'>
									Get Started
								</button>
							</SignInButton>
						)}
					</div>
				</div>
			</section>

			{isSignedIn && (
				<section className='py-16 px-6 max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{features.map((feature) => (
							<Link to={feature.link ?? '#'} key={feature.key}>
								<div
									key={feature.key}
									className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:cursor-pointer min-h-[250px] max-h-[250px]'
								>
									<div className='mb-4'>{feature.icon}</div>
									<h3 className='text-xl font-semibold text-white mb-3'>
										{feature.title}
									</h3>
									<p className='text-gray-400 leading-relaxed'>
										{feature.description}
									</p>
								</div>
							</Link>
						))}
					</div>
				</section>
			)}
		</div>
	)
}
