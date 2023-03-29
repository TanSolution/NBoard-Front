import { ApolloClient, InMemoryCache } from '@apollo/client';
import boardVar from '../stores/board';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                getBoards: {
                    read() {
                        return boardVar()
                    }
                }
            }
        }
    }
});

const apollo = new ApolloClient({
    cache: cache
});

export default apollo;