import Link from 'next/link'

const headerDiff = {
	marginRight : 15
}

export default () => (
	<div>
	<Link href="/">
		<a style={headerDiff}>Home</a>
	</Link>
	<Link href="/about">
		<a style={headerDiff}>About</a>
	</Link>
	</div>
)