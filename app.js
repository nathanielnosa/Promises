const data = [
  {
    title: 'This is post one',
    body: 'This is getting better'
  },
  {
    title: 'This is post two',
    body: 'We are getting better'
  },
  {
    title: 'This is post three',
    body: 'This is getting best'
  },
  {
    title: 'This is post four',
    body: 'We are getting best'
  },
  {
    title: 'This is post five',
    body: 'We are Javascript Guru'
  }
]

function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      data.push(post);

      // cathing error
      const erro = false;
      if(!erro){
        resolve();
      }else{
        reject('Error: Check something is wrong!');
      }
      
    },200);
  });
  
}

function getPost(){
  setTimeout(function(){
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}

createPost({title:'Post Five', body:'We the best'})
.then(getPost)
.catch(function(erro){
console.log(erro);
});