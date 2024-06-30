const $counter = document.getElementById("js-counter");

document.getElementById("js-button").addEventListener("click", () =>
{
    let currentCounter = perseInt($counter.textContent);
    $counter.textContent = currentCounter + 1;
});