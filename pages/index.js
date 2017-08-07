import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostTitle = (props) =>(
	<li>
		<Link as = {`/p/${props.id}`} href = {`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>	
)

const Index = () => (
	<Layout>
	<h1>My BLog</h1>
	<ul>
		<PostTitle id="hello-nextjs" title="Hello Next.JS"/>
		<PostTitle id="learn-nextjs" title="Learn Next.JS"/>
		<PostTitle id="deploy-nextjs" title="Deploy Next.JS App"/>
	</ul>
		<p>Hello Next.JS</p>
	</Layout>
)

export default Index

// <Link href = {{pathname:"/post",query:{title:props.title}}}>\
// <Link href = {`/post?title=${props.title}`}>