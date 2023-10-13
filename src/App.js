import { useGetPostsQuery } from './redux/api'
import { MainPage } from './pages/main-page'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/error-page'
import { DescriptionPage } from './pages/description-page'

function App() {
      const { data = [], isLoading } = useGetPostsQuery({ limit: 10 })

      if (isLoading) return <h1>Loading...</h1>

      return (
            <div>
                  <Routes>
                        <Route path={'/'} element={<Navigate to={'main'} />} />

                        <Route path={'/main'} element={<MainPage data={data} />} />
                        <Route path={'/description/:id'} element={<DescriptionPage data={data} />} />

                        <Route path={'/*'} element={<ErrorPage />} />
                  </Routes>
            </div>
      )
}

export default App
