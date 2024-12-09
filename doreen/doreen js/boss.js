document.getElementById('revealMessage').addEventListener('click', function () {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.style.display = 'block';
    this.style.display = 'none';
});
