import { useMemo, ComponentType } from 'react'
import Api from '@/configs/api'

interface withApiInstanceProps {
	api: Api
}

const BASE_URL = `http://localhost:5173`

const withApiInstance = (Component: ComponentType<withApiInstanceProps>, url: string) => () => {
	const api = useMemo(() => Api.createInstance(url), [])
	return <Component api={api} />
}

export default withApiInstance
