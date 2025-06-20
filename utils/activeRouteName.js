export const activeRouteName = (state) => {
    if (!state || !state.routes || state.routes.length === 0) return null;
    const route = state.routes[state.index];

    if (route.state) {
        return activeRouteName(route.state);
    }

    return route.name;
};
