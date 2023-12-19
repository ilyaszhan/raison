import type { Metadata } from 'next'
import { MainFont } from '../utils/fonts'
import '@/styles/global.scss'

export const metadata: Metadata = {
	title: 'Raison test task',
	description: 'By Zhan Ilyas sweethava.me',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={MainFont.variable}>{children}</body>
		</html>
	)
}
