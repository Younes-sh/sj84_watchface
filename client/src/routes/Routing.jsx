import { useRoutes } from 'react-router-dom';
import routes from './routes';

const Routing = () => {
    const router = useRoutes(routes);
    return router;
}

export default Routing;