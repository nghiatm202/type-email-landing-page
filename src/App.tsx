import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts'
import { publicRoutes } from '@/routes'
import './styles/App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = MainLayout
              const Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
