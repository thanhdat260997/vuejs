import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'

export const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/add', name: 'add', component: Add},
    {path: '/edit', name: 'edit', component: Edit}
]