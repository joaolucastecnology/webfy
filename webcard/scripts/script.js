var OSNome = "name";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSNome="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSNome="Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSNome="Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSNome="Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSNome="Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSNome="Windows 2000";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSNome="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSNome="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSNome="Linux";
alert('Seu Sistema Operacional: '+ OSNome);