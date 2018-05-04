import { generateColors } from './colorsGenerator';
import { getColor } from './colorsMapping';

const mapColorWithData = function (data , parentColor, cloneColor = '#F6F6F6', borderColor = "#fff") {
	let items = data.data; 
	const refColors = getColor(parentColor) || ["#38B049", "#F2DA00"];
	const startColor = refColors[0];
	const endColor = refColors[1];

	const generatedColors = generateColors(startColor, endColor, items.length);

	data.data = items.map((item, index , array)=> {
		item.color = item.dummy || item.border ? borderColor :  generatedColors[index];
		item.color = item.clone ? cloneColor : item.color;
		return item; 
	});
	return data;
}

export default mapColorWithData;