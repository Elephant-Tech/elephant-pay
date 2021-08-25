/**
 
 @Name: layuiNetCompany - 大气风格的网络公司企业模版
 @Author: xuxingyu
 @Copyright: layui.com
 
 */

layui.define(['jquery', 'carousel'], function(exports){
  var $ = layui.jquery
  ,carousel = layui.carousel

  //轮播渲染
  carousel.render({
    elem: '#banner'
    ,width: '100%'
    ,height: '520px'
    ,arrow: 'always'
  });

  //滚动监听
  $(window).scroll(function() {
    var scr=$(document).scrollTop();
    scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
  });

  //轮播文字
  $(function(){
    $('.banner').children('.title').addClass('active');
  })

  //导航切换
  var btn = $('.nav').find('.nav-list').children('button')
  ,spa = btn.children('span')
  ,ul = $('.nav').find('.nav-list').children('.layui-nav');
  btn.on('click', function(){
    if(!$(spa[0]).hasClass('spa1')){
      spa[0].className = 'spa1';
      spa[1].style.display = 'none';
      spa[2].className = 'spa3';
      $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
    }else{
      spa[0].className = '';
      spa[1].style.display = 'block';
      spa[2].className = '';
      $('.nav')[0].style.height = 80 + 'px';
    }
  });


  exports('firm', {}); 
});