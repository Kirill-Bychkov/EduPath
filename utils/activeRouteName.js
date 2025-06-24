export const activeRouteName = (state) => {
    if (!state || !state.routes || state.routes.length === 0) return "Unknown";

    const route = state.routes[state.index || 0];
    if (!route) return "Unknown";

    if (route.state) {
        return activeRouteName(route.state);
    }

    return route.name || "Unknown";
};
