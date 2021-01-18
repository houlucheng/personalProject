var vm = new Vue({
	el:'.wrap',
	data(){
		return {
			login:"http://u.caixin.com/user/login.html?url=",
			Jurisdiction:'//gateway.caixin.com/api/purchase/auth/findUseAuthCodeByUser',
			resData:{},
			text1:"",
			show:false

		}
	},
	created(){
		var uid = getCookie("SA_USER_UID");
		if(uid){
			this.text1 = GetCookieValue('SA_USER_NICK_NAME')
			this.show = true;
		}else{
			this.text1 = '请登录'
		}
	},
	methods:{
		Receive(){
			var v = this,uid = getCookie("SA_USER_UID");
			if(uid){
				var loading = layer.load(1,{shade:[.5,'#000']});
				v.ajaxAll(v.Jurisdiction,{uid:uid},function(res){
					layer.close(loading);
					if(res.code == 0){
							v.resData = res.data.goodsTypeCodes;
							for (var i = 0; i<v.resData.length; i++) {
								if(v.resData[i] == 'QZSF' || v.resData[i] == 'PRO'){
									v.lotteryStart();
									return false;
								}
							}
							layer.msg('您还不是财新通或数据通用户无法参加活动')
					}else{
						layer.msg(res.msg)
					}
				})
			}else{
				if(!!getCookie("appType")){
					caixin.cxLogin();
				}else{
					window.location.href=v.login+encodeURIComponent(window.location.href)          
				}
			}
		},
		lotteryStart(){//抽奖
			var userId = getCookie("SA_USER_UID"),v = this,
				loading = layer.load(1,{shade:[.5,'#000']});
		    //开启getJSON同步
				$.getJSON("//lotapi.caixin.com/lotapi/lotteryApi/checkActivitesAndDoLottery?id=95&userId="+userId+"&format=json&jsoncallback=?",
						function(res){
							layer.close(loading);
							if(res.type == "actIsUnStart"){
								layer.msg("活动状态不是进行中，暂不能领取！");
							}else if(res.type == "timesIsOver"){
								layer.msg("正在审核您的信息~ <br>如成功入选，我们会在6月5日前，通过短信、邮件方式向您发送“半日券”码，请注意查收。")
							}else{
								var data = res.luckOption;
								data.id == 246?v.reward(data.recordId):''
							}
				  		}
				);
		},
		reward:function(recordId){/*奖品弹窗*/
			let v = this;
	    	var con = "<div class='login_con'><div>姓名：<input type='text' class='reward_name' /></div><div>手机：<input type='text' class='reward_tel' /></div><div>邮箱：<input type='text' class='reward_email' /></div><div id='reward_con'>职位：<input class='reward_place'></div></div><button class='btn'>提交</button><p class='tips'>*入选通知将于6月5日前发布</p>"
	    	var chooseL = layer.open({
	            type: 1,
	            title:0,
	            skin:'prize-layer',
	            closeBtn:1, //不显示关闭按钮
	            anim: -1,//动画
	            area: '5.93rem',//宽度
	            shadeClose: false, //开启遮罩关闭
	            content:con,
	            shade:0.5,
	            success:function(layero, index){
	            		$('.btn').click(function(){
		            			var name = $('.reward_name').val(),
		            			tel = $('.reward_tel').val(),
		            			place = $('.reward_place').val(),
		            			email = $('.reward_email').val()

		            			if(name!="" && tel!=""&&place!=""&&email!=""){
		            				var obj ={
			            				name:name,
			            				tel:tel,
			            				place:place,
			            				email:email
			            			}
		            				v.commintUserInfo(obj,recordId);
		            			}else{
		            				layer.msg("信息不能为空");
		            			}
	            			
	            		})
	            }
	        });
	    },
	    commintUserInfo:function(obj,recordId){//实物奖品领取
	    	var _userInfoName = obj.name,_userInfoPhone = obj.tel,_userInfoAddress = obj.place,_userInfoEmail = obj.email
		     $.getJSON("//lotapi.caixin.com/lotapi/lotteryApi/updateUserInfo?id="+recordId+"&userId="+getCookie("SA_USER_UID")+"&name="+_userInfoName+"&mobile="+_userInfoPhone+"&address="+_userInfoAddress+"&email="+_userInfoEmail+"&format=json&jsoncallback=?",
			function(data){
				if(data.code==0){
					layer.msg("提交成功！<br>正在审核您的信息~ 如成功入选，我们会在6月5日前，通过短信、邮件方式向您发送“半日券”码，请注意查收。")
					$('.btn').attr('disabled',true).css('background-color','#868280');
				}else{
					layer.msg(data.msg);
				}
			});
	    },
		ajaxAll(url,data,fn){
			$.ajax({
				url:url,
				type:'get',
				data:data||{},
				dataType:'jsonp',
				success:function(res){
					fn(res)
				}
			})
			
		}
	}
})