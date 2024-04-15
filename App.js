import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Routes from './routes';

const queryClient = new QueryClient()

export default function App() {
    return (
        <>
            <StatusBar style="auto" backgroundColor="#fff" />
            <QueryClientProvider client={queryClient}>
                <Routes />
            </QueryClientProvider>
        </>
    );
}
