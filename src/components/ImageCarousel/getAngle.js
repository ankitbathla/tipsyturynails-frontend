// get the angle of given coordinates (dx, dy)
const getAngle = (dx, dy) => {
    let theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
};

export default getAngle;
