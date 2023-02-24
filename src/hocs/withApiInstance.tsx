import { useMemo, ComponentType } from 'react'
import Api from '@/configs/api'

interface withApiInstanceProps {
	api: Api
}

const BASE_URL = `http://localhost:5173`

const withApiInstance = (Component: ComponentType<withApiInstanceProps>) => () => {
	const api = useMemo(() => Api.createInstance(BASE_URL), [])
	return <Component api={api} />
}

export default withApiInstance
