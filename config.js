export const config = {
    api: {
        baseUrl: 'https://api.mygate.network',
        endpoints: {
            nodes: '/api/front/nodes',
            users: '/api/front/users/me',
            referrals: '/api/front/referrals/referral/lcVNXa'
        }
    },
    retry: {
        maxAttempts: 3,
        baseDelay: 10000,
        maxDelay: 60000
    },
    websocket: {
        reconnectInterval: 5000,
        maxConcurrentConnections: 50,
        pingInterval: 30000
    }
};
