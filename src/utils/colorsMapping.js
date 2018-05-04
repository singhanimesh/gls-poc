const colors = { 
	"#38B049":["#38B049", "#F2DA00"],
	"#A9D574":["#A9D574", "#E9F4DC"],
	"#FF7F27":["#FF7F27", "#FFE068"],
	"#C1C1FF":["#C1C1FF", "#3333FF"],
	"#D7006B":["#D7006B", "#FFB7DB"],
	"#6200C4":["#6200C4", "#962DFF"],
	"#A346FF":["#A346FF", "#EAD5FF"],
	"#A98301":["#A98301", "#FFC912"],
	"#FF5900":["#FF5900", "#F7C7AD"],
	"#CC39E6":["#CC39E6", "#E8AEF2"]
};

export function getColor(parentColor) {
	let color = colors[parentColor]; 	
	return color || '';  
};
