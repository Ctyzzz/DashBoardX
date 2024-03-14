import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './static/index.scss'
import { setupStore } from './redux/store'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider'

const store = setupStore()

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Provider store={store}>
              <Router />
          </Provider>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
)
