// modal open 

document.querySelector('.click_modal').addEventListener('click', function(){
    document.querySelector('.modal_new').style.display = 'block';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.7)'; // 어두운 배경
});

// modal close
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.modal_new').style.display = 'none';
    document.body.style.backgroundColor = ''; // 배경색 초기화
});


// all checkbox
document.querySelector('.all_check input').addEventListener('change', function(){
    let checkboxes = document.querySelectorAll('.list_table_wrap input[name="choice"]');
    for(let checkbox of checkboxes) {
        checkbox.checked = this.checked; // all_check의 상태를 모든 체크박스에 적용
    }
});
