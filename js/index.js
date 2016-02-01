var tm = TweenMax;
function fnTo(){
  tm.to('#logo', 3, {left: '432px',
    ease: Bounce.easeOut, delay:0.2,
    color: '#fff', backgroundColor: 'black',
    borderBottomColor: '#90e500'
  })
}

function fnFrom(){
  tm.from('#logo', 2, {left: '300px', opacity:'0', delay:2})
}
$(function(){
  tm.to('#logo', 2, {left: '+=300px'})

})
