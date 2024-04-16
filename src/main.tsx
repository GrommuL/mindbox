import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppEntry } from '@/app/app-entry'

import '@/app/assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppEntry />
	</React.StrictMode>
)
