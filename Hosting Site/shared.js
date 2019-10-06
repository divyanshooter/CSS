var backdrop=document.querySelector('.backdrop');
var selectPlanButton=document.querySelectorAll('.button');
var modal=document.querySelector('.modal');
var modalNoButton=document.querySelector('.modal__action--negative');
var toggleButton=document.querySelector('.toggle-button');
var mobNav=document.querySelector('.mobile-nav');
for(var i=0;i<selectPlanButton.length;i++)
{
    selectPlanButton[i].addEventListener('click',function(){
        backdrop.style.display='block';
        if(modal)
        {
            modal.style.display='block';
        }
        
    });
}
if(modalNoButton)
 {
    modalNoButton.addEventListener('click',closeModal);
 }

function closeModal()
{
    backdrop.style.display='none';
    if(modal)
    {
        modal.style.display='none';  
    }
     
}
backdrop.addEventListener('click',function(){
    mobNav.style.display='none';
    closeModal();
});
toggleButton.addEventListener('click',function(){
    mobNav.style.display='block';
    backdrop.style.display='block';
    
});