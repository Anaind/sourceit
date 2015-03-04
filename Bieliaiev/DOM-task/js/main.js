    (function () {
    function bubbleSort(data) {
        var arr = data.slice();
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

    function recursiveList (data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		// var data = [1,2,[3,4,[6,7,8],9],10,11];
        if (data == undefined) {
            data = [1,2,[3,4,[6,7,8],9],10,11]
        }
        var list = document.createElement('ul');
        for(var i = 0; i < data.length; i++) {

            if (data[i].length) {
                list.appendChild(recursiveList(data[i]));
            } else {
                var item = document.createElement('li'); //create element li
                item.appendChild(document.createTextNode(data[i])); //In element li create text Node [i]
                list.appendChild(item); //Add li[i] in ul
            }
        }
        return list;
    }

    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        for (var i = 0; i < data.length; i++) {
            if (typeof(data[i]) == 'number') {
                var heading = document.createElement('h' + weight);
                heading.innerHTML=data[i];
                fragment.appendChild(heading);
            } else {
                fragment.appendChild(recursiveHeadings(data[i], ++weight));
            }          
        }
        return fragment;
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
        form.getElementsByTagName("button")[0].addEventListener("click", function() {
            var firstName = document.getElementById('first-name'),
                lastName = document.getElementById('last-name');
            if (firstName.value != "" &&  lastName.value != "") {
                alert("successful submit form");
            }else { 
                checkingForEmptyness("first-name");
                checkingForEmptyness("last-name");
            }

            function checkingForEmptyness(id) {
                if(document.getElementById(id).value == ""){
                    document.getElementById(id).style.backgroundColor = "#FF0000";
                }
            }
        })
    }
	
	//вызывать функции здесь!
    sortHandler();
    document.getElementById('list').appendChild(recursiveList());
    document.getElementById('headings').appendChild(recursiveHeadings([1,2,[3,4,[6,7,8],9],10,11], 1));
    simpleValidation(form);
})();