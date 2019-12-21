$(function(){
  function addUser(user) {
    var html =`<div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${user.name}</p>
    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>`
      $('#user-search-result').append(html)
  }
  function addDeleteUser(name,id){
    var html = `
    <div class="chat-group-user clearfix" id="${id}">
      <p class="chat-group-user__name">${name}</p>
      <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-name="${name}">削除</div>
    </div>`
      $('.js-add-user').append(html);
  }


  function appendErrMsgToHTML() {
    var html =`
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">"一致するユーザーがいません"</p>
                </div>`
      $('#user-search-result').append(html);
  }
  function addMember(userId) {
    let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
  }

  $(".chat-group-form__search").on("keyup",function(e){
    var input = $("#user-search-field").val();
    console.log(input);
  $.ajax({
    type:'GET',
    url:'/users',
    dataType:'json',
    data:{keyword:input}
  })
    .done(function(users){

      $("#user-search-result").empty();
      if(users.length !== 0){
      users.forEach(function(user){
        addUser(user);
        
      });
      } else if (input.length == 0){
        return false;

      }else{
        appendErrMsgToHTML()
      }
    })
    .fail(function(){
      alert('通信エラーです。ユーザーが表示できません。');
    });
  });
  $("#user-search-result").on('click',".chat-group-user__btn--add",function(){
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    
    $(this).parent().remove();
    
    addDeleteUser(userName,userId);
    addMember(userId);

  });

  $(".js-add-user").on('click',".js-remove-btn",function(){
    $(this).parent().remove();
  });

});



