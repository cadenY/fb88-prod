var ja=jQuery.noConflict();ja(document).ready(function(){function o(o){var s=0;return o.length<6?(ja("#result").removeClass(),ja("#result").addClass("short"),"Too short"):(o.length>7&&(s+=1),o.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(s+=1),o.match(/([a-zA-Z])/)&&o.match(/([0-9])/)&&(s+=1),o.match(/([!,%,&,@,#,$,^,*,?,_,~])/)&&(s+=1),o.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)&&(s+=1),s<2?(ja("#result").removeClass(),ja(".txtpass").addClass("weak"),"Weak"):6==s?(ja("#result").removeClass(),ja("#result").addClass("good"),"Good"):(ja("#result").removeClass(),ja("#result").addClass("strong"),"Strong"))}function s(){var o=ja("#fname").val().length;o<5||o>20?(l=!0,ja("#fname").css("border-color","#ec0000"),ja(".a.okcross").show(),ja(".a.okcheck").hide()):(l=!1,ja("#fname").css("border-color","#028843"),ja(".a.okcheck").show(),ja(".a.okcross").hide())}function a(){""!==ja("#dob").val()?(n=!1,ja("#dob").css("border-color","#028843"),ja(".b.okcheck").show(),ja(".b.okcross").hide()):(n=!0,ja("#dob").css("border-color","#ec0000"),ja(".b.okcross").show(),ja(".b.okcheck").hide())}function c(){new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(ja("#email").val())?(ja("#email").css("border-color","#028843"),ja(".c.okcheck").show(),ja(".c.okcross").hide(),d=!1):(d=!0,ja("#email").css("border-color","#ec0000"),ja(".c.okcross").show(),ja(".c.okcheck").hide())}function e(){new RegExp(/[0-9 -()+]+$/).test(ja("#phone").val())?(k=!1,ja("#phone").css("border-color","#028843"),ja(".d.okcheck").show(),ja(".d.okcross").hide()):(d=!0,ja("#phone").css("border-color","#ec0000"),ja(".d.okcross").show(),ja(".d.okcheck").hide())}function r(){""!==ja("#cur option:selected").val()?(u=!1,ja("#cur").css("border-color","#028843"),ja(".e.okcheck").show(),ja(".e.okcross").hide()):(u=!0,ja("#cur").css("border-color","#ec0000"),ja(".e.okcross").show(),ja(".e.okcheck").hide())}function i(){ja("#user").val().length<8?(f=!0,ja("#user").css("border-color","#ec0000"),ja(".f.okcross").show(),ja(".f.okcheck").hide()):(f=!1,ja("#user").css("border-color","#028843"),ja(".f.okcheck").show(),ja(".f.okcross").hide())}function h(){ja("#pass").val().length<8?(v=!0,ja("#pass").css("border-color","#ec0000"),ja(".g.okcross").show(),ja(".g.okcheck").hide()):(v=!1,ja("#pass").css("border-color","#028843"),ja(".g.okcheck").show(),ja(".g.okcross").hide())}function t(){var o=ja("#pass").val();ja("#cpass").val()!==o?(b=!0,ja("#cpass").css("border-color","#ec0000"),ja(".h.okcross").show(),ja(".h.okcheck").hide()):(ja(".cpass_error").hide(),b=!1,ja("#cpass").css("border-color","#028843"),ja(".h.okcheck").show(),ja(".h.okcross").hide())}function j(){""===ja("#aff").val()?(p=!0,ja("#aff").css("border-color","#ec0000"),ja(".i.okcross").show(),ja(".i.okcheck").hide()):(p=!1,ja("#aff").css("border-color","#028843"),ja(".i.okcheck").show(),ja(".i.okcross").hide())}setInterval(function(){var o=(new Date).toLocaleString();ja(".time-part").html(o)},100);ja(".clicks").on("click",function(o){o.preventDefault(),o.stopPropagation(),ja(this).next(".notes:first").is(":hidden"),ja(this).next(".notes:first").slideToggle("fast")}),ja(".login").on("click",function(o){o.preventDefault(),o.stopPropagation(),ja(this).next(".loginBody:first").is(":hidden"),ja(this).next(".loginBody:first").slideToggle("fast")}),ja(document).on("click",function(o){ja(".loginBody").is(":visible")&&ja(".loginBody").slideToggle("fast"),ja(".notes").is(":visible")&&ja(".notes").slideToggle("fast")}),ja(".loginBody").on("click",function(o){ja(this).is(":visible")&&o.stopPropagation()}),ja("ul.tabs li").click(function(){var o=ja(this).attr("data-tab");if(""==o)return!1;ja("ul.tabs li").removeClass("current"),ja(".tab-content").removeClass("current"),ja(this).addClass("current"),ja("#"+o).addClass("current")});l=!1;ja("#fname").focusout(function(){""!=ja(this).val()?(ja(".a.okcheck").show(),ja(".a.okcross").hide()):(ja(".a.okcross").show(),ja(".a.okcheck").hide())}),ja("#fname").keyup(function(){""!=ja(this).val()?(ja(this).css("border-color","#028843"),ja(".a.okcheck").show(),ja(".a.okcross").hide()):(ja(this).css("border-color","#ec0000"),ja(".a.okcross").show(),ja(".a.okcheck").hide())}),ja("#dob").focusout(function(){""!=ja(this).val()?(ja(".b.okcheck").show(),ja(".b.okcross").hide(),ja(this).css("border-color","#028843")):(ja(".b.okcross").show(),ja(".b.okcheck").hide(),ja(this).css("border-color","#ec0000"))}),ja("#email").focusout(function(){new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(ja("#email").val())?(ja(this).css("border-color","#028843"),ja(".c.okcheck").show(),ja(".c.okcross").hide()):(ja(this).css("border-color","#ec0000"),ja(".c.okcross").show(),ja(".c.okcheck").hide())}),ja("#email").keyup(function(){new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(ja("#email").val())?(ja(this).css("border-color","#028843"),ja(".c.okcheck").show(),ja(".c.okcross").hide()):(ja(this).css("border-color","#ec0000"),ja(".c.okcross").show(),ja(".c.okcheck").hide())}),ja("#phone").focusout(function(){""!=ja(this).val()?(ja(".d.okcheck").show(),ja(".d.okcross").hide()):(ja(".d.okcross").show(),ja(".d.okcheck").hide())}),ja("#phone").keyup(function(){new RegExp(/[0-9 -()+]+$/).test(ja("#phone").val())?(ja(this).css("border-color","#028843"),ja(".d.okcheck").show(),ja(".d.okcross").hide()):(ja(this).css("border-color","#ec0000"),ja(".d.okcross").show(),ja(".d.okcheck").hide())}),ja("#cur").focusout(function(){""!=ja(this).val()?(ja(".e.okcheck").show(),ja(".e.okcross").hide()):(ja(".e.okcross").show(),ja(".e.okcheck").hide())}),ja("#user").focusout(function(){""!=ja(this).val()?(ja(".f.okcheck").show(),ja(".f.okcross").hide()):(ja(".f.okcross").show(),ja(".f.okcheck").hide(),ja(this).css("border-color","#ec0000"))}),ja("#user").keyup(function(){ja(this).val().length>8?(ja(this).css("border-color","#028843"),ja(".f.okcheck").show(),ja(".f.okcross").hide()):(ja(this).css("border-color","#ec0000"),ja(".f.okcross").show(),ja(".f.okcheck").hide())}),ja("#pass").focusout(function(){ja("#result").val();ja("#result").hasClass("strong")?(ja(".g.okcheck").show(),ja(".g.okcross").hide(),ja(this).css("border-color","#028843")):(ja(".g.okcross").show(),ja(".g.okcheck").hide(),ja(this).css("border-color","#ec0000"))}),ja("#pass").keyup(function(){ja("#result").html(o(ja("#pass").val()))}),ja("#cpass").focusout(function(){ja(this).val()==ja("#pass").val()?(ja(".h.okcheck").show(),ja(".h.okcross").hide(),ja(this).css("border-color","#028843")):(ja(".h.okcross").show(),ja(".h.okcheck").hide(),ja(this).css("border-color","#ec0000"))}),ja("#cpass").keyup(function(){var o=ja("#pass").val();ja("#cpass").val()!==o?(ja(".h.okcheck").show(),ja(".h.okcross").hide(),ja(this).css("border-color","#028843")):(ja(this).css("border-color","#ec0000"),ja(".h.okcross").show(),ja(".h.okcheck").hide())}),ja("#aff").focusout(function(){""!=ja(this).val()?(ja(".i.okcheck").show(),ja(".i.okcross").hide(),ja(this).css("border-color","#028843")):(ja(".i.okcross").show(),ja(".i.okcheck").hide(),ja(this).css("border-color","#ec0000"))});var l=!1,n=!1,d=!1,k=!1,u=!1,f=!1,v=!1,b=!1,p=!1;ja(".submit").click(function(){return s(),a(),c(),e(),r(),i(),h(),t(),j(),!1===l&&!1===n&&!1===d&&!1===u&&!1===f&&!1===v&&!1===b&&!1===p}),ja("#primary-menu ul li .mega-menu-content.style-2 li ul.listv li.listnav").hover(function(){ja(this).addClass("active").siblings().removeClass("active"),ja(this).css("color","red")});var w=ja("#cirlceFlags > ul > li > a > img").attr("src");ja("ul#childFlag > li img").each(function(o,s){ja(this).attr("src")===w&&ja(this).parents("li").addClass("active")}),ja(document).on("click","#childFlag li a",function(o){if(ja(this).hasClass("active"))return!1;o.preventDefault(),ja("#childFlag li").removeClass("active"),ja(this).parent().addClass("active"),ja("#cirlceFlags > ul > li > a > img").attr("src",ja(this).find("img").attr("src"))});var g=ja("#cirleColors > ul > li > span").attr("class").split(" ")[1];ja("ul#childColor li a span").each(function(o,s){ja(this).hasClass(g)&&ja(this).parents("li").addClass("active")}),ja(document).on("click","#childColor li a",function(o){if(ja(this).hasClass("active"))return!1;o.preventDefault();var s=ja(this).find("span").attr("class").split(" ")[1];ja("#childColor li").removeClass("active"),ja(this).parent().addClass("active"),ja("#cirleColors > ul > li > span").removeClass("black white"),ja("#cirleColors > ul > li > span").addClass(s)})});