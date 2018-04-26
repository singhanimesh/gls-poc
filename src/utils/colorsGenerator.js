/**
 * TODO - refactor this as a (jQuery?) plugin!
 * */
// Converts a #ffffff hex string into an [r,g,b] array

const convertHexToRGB = (hex) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? [
		parseInt(result[1], 16),
		parseInt(result[2], 16),
		parseInt(result[3], 16)
	] : null;
};

	// Inverse of the above
const convertRGBToHex = (rgb) => `#${  ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)}`;

// Interpolates two [r,g,b] colors and returns an [r,g,b] of the result
// Taken from the awesome ROT.js roguelike dev library at
// https://github.com/ondras/rot.js
const interpolateColor = (color1, color2, factor) => {
	if (arguments.length < 3) {
		factor = 0.5;
	}
	const result = color1.slice();
	for (let i = 0; i < 3; i++) {
		result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
	}
	return result;
};


const convertRGBToHSL = (color) => {
	const r = color[0] / 255;
	const g = color[1] / 255;
	const b = color[2] / 255;

	let max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h, s, l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
		switch (max) {
		case r:
			h = (g - b) / d + (g < b ? 6 : 0);
			break;
		case g:
			h = (b - r) / d + 2;
			break;
		case b:
			h = (r - g) / d + 4;
			break;
		}
		h /= 6;
	}

	return [h, s, l];
};

const convertHSLToRGB = (color) => {
	let l = color[2];

	if (color[1] == 0) {
		l = Math.round(l * 255);
		return [l, l, l];
	} 
	function convertHUEToRGB(p, q, t) {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	}

	const s = color[1];
	const q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
	const p = 2 * l - q;
	const r = convertHUEToRGB(p, q, color[0] + 1 / 3);
	const g = convertHUEToRGB(p, q, color[0]);
	const b = convertHUEToRGB(p, q, color[0] - 1 / 3);
	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        
};

const interpolateHSL = (color1, color2, factor) => {
	if (arguments.length < 3) {
		factor = 0.5;
	}
	const hsl1 = convertRGBToHSL(color1);
	const hsl2 = convertRGBToHSL(color2);
	for (let i = 0; i < 3; i++) {
		hsl1[i] += factor * (hsl2[i] - hsl1[i]);
	}
	return convertHSLToRGB(hsl1);
}

	
export function	generateColors(startColor, endColor, count, type) {
	let sColor, eColor, colors = [],
		color, factorStep, ipMethod;

	sColor = convertHexToRGB(startColor),
	eColor = convertHexToRGB(endColor);


	factorStep = 1 / (count - 1);

	ipMethod = type === 'HSL' ? interpolateHSL : interpolateColor;

	for (let i = 0; i < count; i++) {
		const ipColor = ipMethod(sColor, eColor, factorStep * i);
		color = convertRGBToHex(ipColor);
		colors.push(color);
	}

	return colors;

}

