var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
	var table = [];
        for (var i = 1; i <= size; i++) {
            table[i - 1] = [];
        for (var j = 1; j <= size; j++) {
            table[i - 1][j - 1] = i * j;
        }
    } 
    return table;
}

function matrix (size) {
    var matrix = [],i,k;
    for(i=1; i<11; i++){
        var matrix_str=[];
        for(k=1; k<11; k++){
            if(k==i){
            matrix_str[k-1]=1;
        }else if(k+i==11){
            matrix_str[k-1]=2;
        }else if(i<5 && k>i && k<11-i){
            matrix_str[k-1]=3;
        }else if(i>5 && k<i && k>11-i){
            matrix_str[k-1]=5;
        }else if(k<5 && i>k && i<11-k){
            matrix_str[k-1]=6;
        }else if(k>5 && i<k && i>11-k){
            matrix_str[k-1]=4;
        }
    }
    matrix[i-1]=matrix_str;
    }
    return matrix;
}

function pascal (size) {
    var triangle = [];

        for (var i = 0; i <= size; i++) {
            triangle[i] = [];
        }
        triangle[0][0] = 1;
        triangle[1][0] = 1;
        triangle[1][1] = 1;
        for (var i = 0; i <= size; i++) {
            triangle[i][0] = 1;
            triangle[i][i] = 1;
        }
        
        for (var i = 1; i <= size; i++) {
            for (var j = 1; j < i; j++) {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    return triangle;
}

function render (array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }
    return result.join('');
}