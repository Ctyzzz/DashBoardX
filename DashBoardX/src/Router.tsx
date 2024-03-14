import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout';
import {routes} from './const'
import { useDispatch } from 'react-redux';
import { setAccess, setRefresh } from './redux/slices/auth';
import {getCookie} from 'typescript-cookie';

function Router() {
    const access = getCookie('accessToken');
    const refresh = getCookie('refreshToken');
    const dispatch = useDispatch()
    access&&dispatch(setAccess(access))
    refresh&&dispatch(setRefresh(refresh))
    const isAuth = true

    return ( 
        <Routes>
			{routes.map(route => {
				if (route.isAuth && !isAuth) {
					return false
				}

				return (
                    <Route key={route.path} path={route.path} element={<Layout />}>
                        <Route
                            index
                            element={<route.component />}
                        />
                    </Route>
				)
			})}
        </Routes>
    );
}

export default Router;