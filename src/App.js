import { useGetPostsQuery } from './redux/api'
import { MainPage } from './pages/main-page'
import { Route, Routes } from 'react-router-dom'
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
                        <Route path={'/picasso-test-task'} element={<MainPage data={data} />} />
                        <Route path={'/description/:id'} element={<DescriptionPage data={data} />} />
                  </Routes>
            </div>
      )
}

export default App
