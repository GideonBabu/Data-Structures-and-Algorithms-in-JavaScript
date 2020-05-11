const boxes =['a','b','c'];
const boxes2 =['d','e','f'];

function compressBoxesTwice(boxes, boxes2) {
	boxes.forEach(function(boxes) {
		console.log(boxes);
	});

	boxes2.forEach(function(boxes) {
		console.log(boxes);
	});	
}

compressBoxesTwice(boxes, boxes2);

// O (n + m) -- use different term for different inputs