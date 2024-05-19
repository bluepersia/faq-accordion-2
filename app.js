let current = null;


function setCurrent (target) 
{
    if (current === target)
        target = null;

    if (current)
        current.classList.remove ('selected');

    current = target;

    if (current)
        current.classList.add ('selected');

}

document.querySelector ('.c__accordion').addEventListener ('click', handleAccordionClick);

function handleAccordionClick (e)
{
    const item = e.target.closest ('.c__item');

    setCurrent (item);
}