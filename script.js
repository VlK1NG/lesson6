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