const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
}

function dragstart(e) {
    // console.log('dragstart');
    e.target.classList.add('hold');
    setTimeout(()=>{
        e.target.classList.add('hide');
    })
}
function dragend(e) {
    // console.log('dragend');
    e.target.classList.remove('hold', 'hide');
}

function dragover(e) {
    e.preventDefault();
    // console.log('dragover');
}
function dragenter(e) {
    // console.log('dragenter');
    e.target.classList.add('hovered');
}
function dragleave(e) {
    // console.log('dragleave');
    e.target.classList.remove('hovered');
}
function drop(e) {
    // console.log('drop');
    e.target.append(item);
    e.target.classList.remove('hovered');
}