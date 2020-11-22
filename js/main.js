   $(function () { ///jqb//////////////////////


   			$(document).on('click', 'a[href="#"]', function (e) {
   				e.preventDefault();
   			}); //////////a href 막기


   			/////////////////////////////////////////////////////////
   			///////////////메인메뉴//////////////////////////////////

   			/*토글클릭*/
   			$(".toggle").click(function () {
   				$(".toggle").toggleClass("on");
   				$("nav").toggleClass("on");
   		
   			}) ////////////////토글 클릭시
	   		$("article").click(function(){
				$(".toggle").removeClass("on");
   				$("nav").removeClass("on");
   			
			})
   			/*첫번째메뉴 선택*/
   			$(".mainmenu > li").children("a").eq(0).css({
   				color: "#1936AA"
   			}) //////////////////////////////////////////////////
   			$(".mainmenu > li").children(".line").eq(0).animate({
   				width: "50px",
   			}, 100); /////////////////////////////////////////


   			/*메뉴클릭시 라인*/
   			$(".mainmenu > li ").click(function () {
   				$(".line").attr("style", "");
   				$(".mainmenu li a").attr("style", "");
   				$(this).children("a").css({
   					color: "#1936AA"
   				})
   				$(this).children(".line").animate({
   					width: "50px",
   				}, 100);
				$(".shopmenu li").attr("style","")
   			})
   			/*세부메뉴 클릭스크립트*/
   			$(".shopmenu li").click(function () {
   				$(".line").attr("style", "");
   				$(".mainmenu li a").attr("style", "");
   				$(".mainmenu > li").children("a").eq(3).css({
   					color: "#1936AA"
   				}) //////////////////////////////////////////////////
   				$(".mainmenu > li").children(".line").eq(3).animate({
   					width: "50px",
   				}, 100); ////////////////////////////////////////////////////
   				$(this).css({
   					opacity: "1"
   				}).siblings().attr("style", "")
   			}) /////////////////////////////////////////////////////////
	   
	   		/*카테고리 클릭시 메뉴 바뀌게*/
   			$("article").children("div").hide();
   			$(".about").fadeIn(300);
	        var ctegory = [
             {name: 'about'},
             {name: 'collection'},
             {name: 'stock'},
             {name: 'shop'},   
             ];
                ctegory.forEach(function (el, index) {
                	$(".mainmenu > li").eq(index).click(function () {
                		$("article").children("div").hide();
                		$("."+el.name).fadeIn(300);
                	})/////////
                });///////////////////////foreach문
	   
	   		$(".shopmenu li").click(function(){
						$("article").children("div").hide();
                		$(".shop").fadeIn(300);
			})/////////////////////

   	///////////////////////////////////////////////////////////////
     var shop = [
                    {class:"man",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail0.png)',pcte:"man"},
                    {class:"man",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail1.png)',pcte:"woman"},
                    {class:"man",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail2.png)',pcte:"acc"},
                    {class:"woman",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail3.png)'},
                    {class:"woman",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail4.png)'},
                    {class:"woman",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail5.png)'},
                    {class:"acc",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail6.png)'},
                    {class:"acc",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail7.png)'},
                    {class:"acc",pname: "D2001-2 ENGNEERED SHIRT",img: 'url(images/tumnail8.png)'},
              

                    ]; //////////////publishing 배열

                    shop.forEach(function (el, index) {
                    	$(".shop ul").append("<li class='" + el.class + "'><a href='#'><span class='over'><span>view</span></span><span class='thumnail'></span><span class='pname'>" + el.pname + "</span><span class='pprice'>￦ 158,000</span><span class='pcte'>" + el.class + "</span></a></li>")

                    	$(".thumnail").eq(index).css({
                    		'background-image': el.img
                    	}); /////////css
						$(".mainmenu > li").eq(3).click(function(){
							$(".shop ul").children("li").show();
						})
                    	$(".shopmenu li").eq(index).click(function () {
                    		$(".shop ul").children("li").hide();
                    		$(".shop ul").children("."+el.pcte).show();
                    	}) /////////////////////
                    })//////////////////foreach문
	   
	   				/////////// 상품 정보 /////////////////
	   				$(".shop ul").children("li").click(function () {
	   					$("article").children("div").hide();
	   					$(".product").fadeIn(300);
	   				})////////////click

	   				$(".overlay").hide();
	   				$(".detail img").click(function () {
	   					var src = $(this).attr("src");
	   					$(".overlay").fadeIn(200);
	   					$(".overlay").append("<img class='ovimg' src='" + src + "' alt=''>")
	   				})/////////////click
	   				
	   				var plus = 0;
	   				var lmt=$(".detail img").length;
	   				$('.npbtn').click(function(){
						if ($(this).is(".nextbtn")) {
							plus++;
							if(plus>3)plus=0;
						}
						else{
							plus--;
							if(plus<0)plus=3;
						}
						var ovsrc = $('.overlay').children('img').attr("src");
						ovsrc=ovsrc.split("detail");
						ovsrc=ovsrc[1];
						ovsrc=ovsrc.split(".");
						ovsrc=ovsrc[0];
						ovsrc=Number(ovsrc);
						ovsrc=ovsrc+plus;
						if(ovsrc>3)ovsrc=0
						$(".overlay").append("<img class='ovimg' src='images/detail"+ovsrc+".jpg' alt=''>")
					})
	   
	   				$(".closebtn").click(function () {
	   				$(".overlay").fadeOut(300)
	   				});
	   				////////////////////////////////////////////////
	   				////////////콜렉션///////////////////////////////
	   				

	   				for (var i = 0; i < 10; i++) {

						$(".look").children("li").eq(i).css({
							'background': 'url(images/look'+i+'.jpg ) center/cover'
						})
	   				};
	   				var look=[
					 {tit:'2020 MARINE DAY'},
					 {tit:'2020 SPRING/SUMMER'},
					 {tit:'2019 AUTUMN/WINTER'},
					 {tit:'2019 SPRING/SUMMER'},
					 {tit:'2018 AUTUMN/WINTER'},
					 {tit:'2017 AUTUMN/WINTER'},
					 {tit:'2017 MARINE DAY'},
					 {tit:'2017 SPRING/SUMMER'}
					]
					look.forEach(function (el, index) {
						$(".look").children("li").eq(index).append("<span><span></span>"+el.tit+"</span>");
					});
	   				////////////////////////////////////////////////
	   				

	   				}); //////////////jqb////////////////////////
