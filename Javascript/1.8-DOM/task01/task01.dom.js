const priorityGroups = document.querySelectorAll('.priority-group')

console.log(`Numero de grupos: ${priorityGroups.length}`); 
priorityGroups.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const tasks = item.querySelectorAll('ul li');
    
    console.log(`Priority: ${title}`);
    console.log(`Tasks: ${tasks.length}\n`);
});