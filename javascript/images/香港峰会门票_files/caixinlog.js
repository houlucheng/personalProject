var urp = new Array();                                        
var urpv = new Array();                        
var arrayCount = 0;                       
pageOpen = new Date();	                         

var GUID = Math.round(Math.random()*2147483647);    		 
var title = document.title;                                
var uexp = pageOpen.getTime() + ( 1000 * 60 * 60 * 24 * 30 ); 
var rtu = "false"; 
var poin = new Date(pageOpen.getFullYear(),pageOpen.getMonth(),pageOpen.getDate(),23,59,59);	
var pointime =poin.getTime();

 
var Para_;

var brower = new Array();
var sEn=new Array();	
var keyWord=new Array(); 
sEn[0]="google";		keyWord[0]="q";
sEn[1]="yahoo";			keyWord[1]="p";
sEn[2]="msn";			keyWord[2]="q";
sEn[3]="aol";			keyWord[3]="query";
sEn[4]="lycos";			keyWord[4]="query";
sEn[5]="ask";			keyWord[5]="q";
sEn[6]="altavista";		keyWord[6]="q";
sEn[7]="search";		keyWord[7]="q";
sEn[8]="netscape";		keyWord[8]="query";
sEn[9]="earthlink";		keyWord[9]="q";
sEn[10]="cnn";			keyWord[10]="query";
sEn[11]="looksmart";	keyWord[11]="key";
sEn[12]="about";		keyWord[12]="terms";
sEn[13]="excite";		keyWord[13]="qkw";
sEn[14]="mamma";		keyWord[14]="query";
sEn[15]="alltheweb";	keyWord[15]="q";
sEn[16]="gigablast";	keyWord[16]="q";
sEn[17]="voila";		keyWord[17]="kw";
sEn[18]="virgilio";		keyWord[18]="qs";
sEn[19]="teoma";		keyWord[19]="q";
sEn[20]="baidu";		keyWord[20]="wd";
sEn[21]="baidu";		keyWord[21]="page";
sEn[22]="baidu";		keyWord[22]="word";
sEn[23]="caixin";	keyWord[23]="keyword";
sEn[24]="search.live.com";	keyWord[24]="q";
sEn[25]="soso";			keyWord[25]="w";
sEn[26]="google.com";		keyWord[26]="q";

String.prototype.replaceAll = stringReplaceAll;

function stringReplaceAll(AFindText,ARepText){
	raRegExp = new RegExp(AFindText,"g");
	return this.replace(raRegExp,ARepText)
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function GetResident() {
	var filename=location.pathname;
	var cx_from=location.search;
	filename=filename.substr(filename.lastIndexOf("/")+1);
	cx_from=GetQueryString("CX_FROM");
	if(filename.lastIndexOf('_')>=0){
		filename=filename.substr(0,filename.lastIndexOf("_"));
	}else{
		filename=filename.substr(0,filename.lastIndexOf("."));
	}
	if(cx_from=='' || cx_from==undefined || cx_from==null){
		//获得来源
		var ref = ''; 
 		if (document.referrer.length > 0) { 
  			ref = document.referrer; 
 		} 
 		try { 
  			if (ref.length == 0 && opener.location.href.length > 0) { 
   				ref = opener.location.href; 
  			} 
 		} catch (e) {}
		if (ref.indexOf("360.cn") > -1) {
			cx_from = "360.cn";
    	}else if (ref.indexOf("sh.qihoo.com") > -1) {
			cx_from = "sh.qihoo.com";
    	}
	}
	if(getCookie("CX_FROM")=='' || getCookie("CX_FROM")==undefined || getCookie("CX_FROM")==null){
			setCookie("ENTITY_ID",filename);
			setCookie("ENTITY_COUNT",0);
			setCookie("CX_FROM",cx_from);
	}else{
		if(getCookie("ENTITY_ID")==filename){
			setCookie("ENTITY_COUNT",parseInt(getCookie("ENTITY_COUNT"))+1);
		}else{
			setCookie("ENTITY_ID",filename);
			setCookie("ENTITY_COUNT",0);
			setCookie("CX_FROM",cx_from);
		}
	}

    //如果cxform为空则设置为浏览器关闭就失效。
    //var c = document.cookie.indexOf("CX_FROM"+"=");
    //if (c == -1) {
        //setCookie("CX_FROM",'cx_from',"setnull");
    //}

	//noCookie
    if(getCookieValue() == "noCookie" )
    {
        setCookie("GUID",GUID);
		setCookie("T_GUID",pageOpen.getTime());
        setCookie("GID30",GUID);
        setCookie("lastTime",pageOpen.getTime());
		
        setCookie("firstTime",pageOpen.getTime());
        setCookie("point",pointime);
    }
    //30day
    else if((getCookie("firstTime")*1+1000*60*60*24*30) < pageOpen.getTime())
    {
		setCookie("GUID",GUID);
		setCookie("T_GUID",pageOpen.getTime());
		
    	setCookie("GID30",GUID);
		setCookie("lastTime",pageOpen.getTime());
		setCookie("firstTime",pageOpen.getTime());
		setCookie("point",pointime);
    }
    //  <30minute
    else if((getCookie("lastTime")*1 + 1000*60*30) > pageOpen.getTime())
    {	
		setCookie("lastTime",pageOpen.getTime());	
		setCookie("firstTime",pageOpen.getTime());
		setCookie("point",pointime);
	}else{	// >30minute
        setCookie("GID30",GUID);
		setCookie("lastTime",pageOpen.getTime());
		setCookie("firstTime",pageOpen.getTime());
		setCookie("point",pointime);
	}
	if(typeof(getCookie("T_GUID")) == "undefined"){
		setCookie("T_GUID",pageOpen.getTime());
	}
}

function GetResidentTime() 
{
	pageClose = new Date();
	GetResident() ;
	Para_=StrPara();
	New_Para_=New_StrPara();
	try{var href = top.location.href;}catch(e){var href = location.href;}
	if(href.indexOf("#")>0){
		href = href.substring(0,href.indexOf("#"));
	}
	var _ourplusPageurl = escape(href);
	
	time_bam = 0;
 
    //new log start
	var newLogPage = "//apollo.caixin.com/count.gif";
	var newLogUrl = encodeURI(newLogPage + "?" + New_Para_+"&st="+time_bam+"&daye="+pageClose.getTime()+Math.round(Math.random()*2147483647))+"&pageurl="+_ourplusPageurl;

	//add attr
	if(typeof(entity) != "undefined" && typeof(entity.attr) != "undefined"){
	    newLogUrl = newLogUrl + "&extNum2=" + entity.attr;
	}else if(typeof(attr) != "undefined"){
	    newLogUrl = newLogUrl + "&extNum2=" + attr;
	}
	
	if(!(typeof(vjp)=='boolean'&&vjp==true)){
        var img = document.createElement("img");
        img.src = newLogUrl;
        img.style.display = "none";
        document.body.appendChild(img);
		//document.write("<img src='" + newLogUrl + "' style=display:none />");
	}
	
	window.statisticsAuthNewLogUrl = newLogUrl;

	//new log end

    //new log start
	var newLogPage = "http://219.232.238.60/count.jsp";
	var newLogUrl = encodeURI(newLogPage + "?" + Para_+"&st="+time_bam+"&daye="+pageClose.getTime()+Math.round(Math.random()*2147483647))+"&pageurl="+_ourplusPageurl;
	//document.write("<script src='" + newLogUrl + "'></"+"script>");	
	//new log end

    //logstat  start
	/*
    var _ourplusCountPage = "http://116.213.75.36/logstat/count.jsp";
	var _ourplusCountUrl = encodeURI(_ourplusCountPage + "?" + Para_+"&st="+time_bam+"&daye="+pageClose.getTime()+Math.round(Math.random()*2147483647))+"&pageurl="+_ourplusPageurl;
	document.write("<script src='" + _ourplusCountUrl + "'></"+"script>");	
	*/
    //logstat  end
}

function StrPara()
{
	var para = "";
    para += "GUID=" + getCookieValue("GUID") + "&";
    para += "GID30=" +getCookie("GID30") + "&";
	para += "TGUID=" + getCookie("T_GUID") + "&";
	var href = document.location.href;
	if(href.indexOf("cx_from")>0){
        para += "CX_FROM=" + getUrlParm("cx_from") + "&";
    }
	if(href.indexOf("#")>0){
		href = href.substring(0,href.indexOf("#"));
	}
	if(title.indexOf("#") > 0){
		title = title.substring(0,title.indexOf("#"));
	}
    para += "cur=" + encodeURIComponent(gethn(href)) + "&";
    para += "title=" + title.replaceAll("'", " ") + "&";
    para += "urr=" +gethn(document.referrer) + "&";
    para += "email=" + getCookie("SA_USER_UID") + "&";
    para += "keyWord=" + getKeyword(getHostName(gethn(document.referrer))) + "&";
    return para;
}

function New_StrPara()
{
	var para = "";
    para += "GUID=" + getCookieValue("GUID") + "&";
    para += "GID30=" +getCookie("GID30") + "&";
	para += "TGUID=" + getCookie("T_GUID") + "&";
	para += "ENTITY_FROM=" + getCookie("CX_FROM") + "&";
	para += "ENTITY_COUNT=" + getCookie("ENTITY_COUNT") + "&";
	var href = document.location.href;
	if(href.indexOf("cx_from")>0){
        para += "CX_FROM=" + getUrlParm("cx_from") + "&";
    }
	if(href.indexOf("#")>0){
		href = href.substring(0,href.indexOf("#"));
	}
	if(title.indexOf("#") > 0){
		title = title.substring(0,title.indexOf("#"));
	}
    para += "cur=" + encodeURIComponent(gethn(href)) + "&";
    para += "title=" + title.replaceAll("'", " ") + "&";
    para += "urr=" +gethn(document.referrer) + "&";
    para += "email=" + getCookie("SA_USER_UID") + "&";
    para += "keyWord=" + getKeyword(getHostName(gethn(document.referrer))) + "&";
    return para;
}

function LoadVoid(){return;}

function getKeyword(url)
{
	var hostname;
	if(url.indexOf(".") == -1)
		{hostname = url;}
	else
		{hostname = url.substring(url.indexOf(".")+1,url.lastIndexOf("."));}
	for(var i = 0; i < sEn.length; i++)
	{
		if(hostname.indexOf(sEn[i])>-1)
		{
			for(var j = 0; j < urp.length; j ++)
			{
				if(urp[j] == keyWord[i])
				{
					return urpv[j];
				}
			}
		}
	}
	return "";
}

function gethn(url)
{
    if(!url || url == "") return "";
    ur = url;
    var sub;
    if(ur.indexOf("?") != -1)
    {
        var url = ur.substring(0,ur.indexOf("?"));
        var para = ur.substring(ur.indexOf("?")+1,ur.length);
        while(para.length > 0)
        {
            if(para.indexOf("&") == -1)
            {
                urp[arrayCount] = para.substring(0,para.indexOf("="));
                urpv[arrayCount] = para.substring(para.indexOf("=")+1,para.length);
                break;
            }
            sub = para.substring(0,para.indexOf("&"));
            urp[arrayCount] = sub.substring(0,sub.indexOf("="));
            urpv[arrayCount] = sub.substring(sub.indexOf("=")+1,sub.length);
            para = para.substring(para.indexOf("&")+1,para.length);
            arrayCount ++;
        }
        return url;
    }
    else
        return ur;
}

function getHostName(url)
{
	url = url.substring(url.indexOf('://')+3,url.length);
	url = url.substring(0,url.indexOf("/"));
	return url;
}

function setCookie(name, value, expires)
{
	var expdate = new Date();
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
    if(!expires){expires=15768000;}    
	var path = (argc > 3) ? argv[3] : '/';
	var domain = (argc > 4) ? argv[4] : 'caixin.com';
	var secure = (argc > 5) ? argv[5] : false;

	if(expires!=null) 
	{
		expdate.setTime(uexp);
	    document.cookie = name + "=" + escape (value) +((expires == "setnull") ? "" : ("; expires="+ expdate.toGMTString()))
		    + ((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=caixin.com"))
		    + ((secure == true) ? "; secure=" : "");
   }
}

function delCookie(name)
{
	var exp = new Date();
	exp.setTime (exp.getTime() - 1);
	var cval = getCookie (name);
	document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}

function getCookie(name) {
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		return unescape(arr[2]);
	}
}

function getCookieValue()
{
	var guid = getCookie("GUID");
	if(guid != null)
	{
	    return guid;
	}
	else
	{
	    return "noCookie";
	}
}

//获取当前地址的中的参数
function getUrlParm( name )
{
  var regexS = "[\\?&]"+name+"=([^&#]*)" ;
  var regex = new RegExp( regexS ) ;
  var tmpURL = document.location.href ;
  var results = regex.exec( tmpURL ) ;
  if( results == null )
  {
    return "" ;
  }
  else
  {
    return results[1] ;
  }
}

(function () {
    function addCookie(sName, sValue, iDay, domain) {
        var setDomain = domain ? domain : '.caixin.com';
        var expdate = new Date();
        iDay && iDay !== 0 ? expdate.setDate(expdate.getDate() + iDay) : expdate.setTime(uexp);

        document.cookie = sName + '=' + sValue + '; domain=' + setDomain + '; EXPIRES=' + expdate.toGMTString();
    }

    var sourceDomain = [
        'baidu.com', 'google.com', 'so.com', 'sogou.com', 'sm.cn'
    ];

    var referrer = document.referrer;
    var domainReg = /^https?:\/\/.*\.(\w+\.\w+)\//;
    var domainArr = referrer.match(domainReg);

    if (referrer && domainArr && domainArr[1] !== 'caixin.com') {
        if(sourceDomain.indexOf(domainArr[1])>-1){
            addCookie('originReferrer', domainArr[1].split('.')[0], 1)
        }
    } else if (referrer === '') {
        addCookie('originReferrer', '', -1)
    } else if (referrer && domainArr && domainArr[1] === 'caixin.com') {

    }
    addCookie('BIS_CODE', '', -1)

})();

GetResidentTime();
