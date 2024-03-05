const title = 'Bonjour les gens'
const style = {color: 'red', backgroundColor: 'blue'}
const showTitle = false
const todos = [
    'Toto',
    'tata',
    'titi'
]
function App() {
    return <>
        <Title color="red"/>
        {showTitle &&<h1 id="title" className="title" style={style}>{title}</h1>}
        <p>Lorem Ipsum</p>
        <ul>
            {todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>
    </>

}

function Title ({color}) {
    return <h1 style={{color: color}}>BOnjour les gens</h1>
}

export default App
