import { useGetPostsQuery } from './redux/api'

function App() {
      const { data = [], isLoading } = useGetPostsQuery()
      console.log(data)

      if (isLoading) return <h1>Loading...</h1>

      return <div>{data && data.map((i) => <div key={i.id}>{i.title}</div>)}</div>
}

export default App
