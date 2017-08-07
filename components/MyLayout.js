import Header from '../components/Header'

const layoutBoundary = {
	margin : 20,
	padding: 20,
  	border: '1px solid #DDD'
}

export default (props) => (
	<div style = {layoutBoundary}>
		<Header/>
		{props.children}
	</div>
)