var j=jQuery.noConflict();j(function(){j.fn.formatAmount=function(){j(this).val(function(e,t){return t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")})},j.fn.generateTime=function(e){var t,n=0,a=new Date;switch(e){case"hh":n=24,t=a.getHours();break;case"mm":n=60,t=a.getMinutes()}for(var o=0;o<n;o++)j(this).append("<option value="+(o+1<=10?"0"+o:o)+" "+(o==t?"selected=selected":"")+">"+(o+1<=10?"0"+o:o)+"</option>")}});var fnDisplayMsg=function(){alert("Please submit your bank details on next page to complete the deposit.\nYou may check the deposit status in History page.")};