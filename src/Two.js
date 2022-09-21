import { useMyContext } from './App';

const Two = () => {
    const value = useMyContext();
    return <div>{value}</div>;
}

export default Two;