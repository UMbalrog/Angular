!function(s){function a(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return s[r].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}var e={};return a.m=s,a.c=e,a.p="",a(0)}([function(s,a,e){s.exports=e(1)},function(s,a,e){e(2)},function(s,a){var e=angular.module("myApp",[]);e.controller("myCtrl",["$scope",function(s){function a(a,e){s.value==e?(s.value="-"+e,s[a]=!1):(s.value=e,s[a]=!0)}s.arr=[{FirstName:"lili",Salary:1233350,LastName:"linst",Birthday:1480734686504,Age:23},{FirstName:"java",Salary:123553240,LastName:"script",Birthday:1480455686504,Age:22},{FirstName:"nodejs",Salary:232351230,LastName:"java",Birthday:1486725676504,Age:20},{FirstName:"angular",Salary:2345345,LastName:"sass",Birthday:1480789566504,Age:45},{FirstName:"jquery",Salary:2345456,LastName:"require",Birthday:1484556786504,Age:34}],s.value="",s.isshow1=!0,s.isshow2=!0,s.isshow3=!0,s.shows1=!1,s.shows2=!1,s.shows3=!1,s.paixu=function(e,r){switch(console.log(e+","+r),r){case"1":s.shows1=!0,s.shows2=!1,s.shows3=!1;break;case"2":s.shows1=!1,s.shows2=!0,s.shows3=!1;break;case"3":s.shows1=!1,s.shows2=!1,s.shows3=!0}a("isshow"+r,e)}}])}]);