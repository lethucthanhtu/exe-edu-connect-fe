import AppRouter from './routers/routes';

/**
 *  App
 *  @returns JSX.Element
 */
export default function App() {
    return (
        <div className='font-body flex flex-col h-screen justify-between'>
            <AppRouter />
        </div>
    );
}
