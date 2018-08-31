// JavaScript Document
var t;
function checkTime()
{
	var date=new Date();
	var hrs=date.getHours();
	var mins=date.getMinutes();
	var secs=date.getSeconds();
	document.getElementById("clock").innerHTML=hrs+":"+mins+":"+secs;
	t=setTimeout("checkTime()",1000);
}
function stopTime()
{
	clearTimeout(t);
}
function showTable()
{
	//show the data in table
	//need the data entered by user
	//value entered in user name	//document.name_of_form.name_or_id.value
	var name=document.user.user_name.value;
	var email=document.user.user_email.value;
	//need to check which radio button is selected
	if(document.user.under_13.checked==true)
	var age="Under 13";
	else
	var age="Over 13"
//var age =document.user.under_13.checked?"Under 13":"Over 13"; It's same 
var bio=document.user.bio.value;
var job=document.user.user_job.value;
var interests="";//no interest
if (document.user.development.checked)
{
	//add development as an interest
	interests+="Development<br />"
}
if (document.user.design.checked)
{
	interests+="Design<br />"
}
if (document.user.business.checked)
{
	interests+="Business<br />"
}
if(interests=="")
{
	interests+="None"
}
document.write("<table width='200' border='4' style='margin:auto; border-color:blue;'>");
document.write(" <tr>");
document.write("<td>Name</td>");
document.write(" <td>"+name+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Email</td>");
document.write("<td>"+email+"</td>");
document.write("</tr>");
document.write("  <tr>");
document.write("<td>Age</td>");
document.write(" <td>"+age+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Biography</td>");
document.write("<td>"+bio+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Job</td>");
document.write("<td>"+job+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Interest</td>");
document.write("<td>"+interests+"</td>");
document.write("</tr>");
document.write("</table>");
}