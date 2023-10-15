import { useGetPostsQuery } from './redux/api'
import { MainPage } from './pages/main-page'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/error-page'
import { DescriptionPage } from './pages/description-page'
import { useEffect, useState } from 'react'

function App() {
      const [limit, setLimit] = useState(7)
      const { data } = useGetPostsQuery({ limit })

      useEffect(() => {
            document.addEventListener('scroll', scrollHandler)
            return () => {
                  document.removeEventListener('scroll', scrollHandler)
            }
      }, [])

      const scrollHandler = (e) => {
            if (
                  e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) <
                  100
            ) {
                  setLimit((prev) => prev + 2)
            }
      }

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
