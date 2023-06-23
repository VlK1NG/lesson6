document.getElementById('addMemo').addEventListener('click', () =>{
    let memoInput = document.getElementById('memoInput');
    let newMemoText = memoInput.value;

    if(newMemoText){
        let newMemoElement = document.createElement('li');
        newMemoElement.textContent = newMemoText;

        document.getElementById('memoList').appendChild(newMemoElement);
        memoInput.value = '';
    }
})

document.getElementById('loadMemo').addEventListener('click', () => {
    const request = new XMLHttpRequest();
    request.onload = function() {
        document.getElementById('memoList').innerHTML = this.responseText;
    }
    request.open('GET', '_items.html', true);
    request.send();
})