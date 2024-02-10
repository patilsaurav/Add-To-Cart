var lastOpenedBox = null;

function expandBox(boxId) {
    var box = document.getElementById(boxId);
    var content = box.querySelector('.hidden-content');
    var radioBtn = box.querySelector('input[type="radio"]');
    

    // If a box was previously opened, close it
    if (lastOpenedBox !== null && lastOpenedBox !== box) {
        var lastOpenedContent = lastOpenedBox.querySelector('.hidden-content');
        lastOpenedContent.style.display = 'none';
        lastOpenedBox.classList.remove('selected');
        lastOpenedBox.querySelector('input[type="radio"]').checked = false;
    }


    // Toggle the display of the hidden content
    if (content.style.display === 'block') {
        content.style.display = 'none';
        box.classList.remove('selected');
        radioBtn.checked = false;

    } else {
        content.style.display = 'block';
        lastOpenedBox = box;
        box.classList.add('selected');
        radioBtn.checked = true;

    }

}
function stopPropagation(event) {
    event.stopPropagation();
}