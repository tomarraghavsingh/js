let celement = document.createElement('h1')
celement.textContent="hello from js"
let bd=document.body
bd.append(celement
)
let delemend=document.createElement('h2')
delemend.textContent="well done"
// let a=document.body
bd.append(delemend)
 
bd.setAttribute('bgcolor','red')
bd.setAttribute('align','center')

celement.setAttribute('style','background-color:blue;color:white')
let b=document.getElementById('bg')
b.removeAttribute('style')