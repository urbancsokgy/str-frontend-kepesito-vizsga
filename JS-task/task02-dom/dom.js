function changeOuterLinks() {
    let links=document.querySelectorAll('#link-list a')
    let link=document.querySelector('#link-list')
    link.style.display = 'flex';
    link.style.flexDirection="column"
    link.style.margin = "0px auto";
    link.style.width = "30%";
    link.style.border = "1px solid blue";
    link.style.padding = "16px";
    links.forEach(element => {
        if (element.innerHTML.includes('outer-link')){
            element.target="_blank"
            element.innerHTML = `<strong>${element.innerHTML}</strong>`;
        }
    });
}

changeOuterLinks()
export { changeOuterLinks };