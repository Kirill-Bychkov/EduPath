export const normalizeAngle = (from, to) => {
    let delta = to - from;

    if (delta > Math.PI) delta -= 2 * Math.PI;
    if (delta < -Math.PI) delta += 2 * Math.PI;
    
    return from + delta;
};
