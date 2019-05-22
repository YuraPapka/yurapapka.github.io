// var to = "kuk@mail.ru";
// var subj = "тема письма";
// var text = "собственно тело письма";
//
// // SendMail(to, subj, text, ["c:\\1.txt"]);
//
//
// function SendMail(sRecipientMail, sSubject, sMsgBody, files)
// {
//     try
//     {
//         // create a session and log on -- username and password in profile
//         var refMsg = WScript.CreateObject("CDO.Message");
//         var refConf = WScript.CreateObject("CDO.Configuration");
//
//         // Setting configuration params
//         with(refConf.Fields)
//         {
//             Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "smtp.mail.ru";
//             Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2;
//             Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1;
//             Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = "lou@list.ru";
//             Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "****";
//         }
//         refConf.Fields.Update();
//
//         with(refMsg)
//         {
//             Configuration = refConf;
//             To       = sRecipientMail;
//             From     = "lou@list.ru";
//             Subject  = sSubject;
//             TextBody = sMsgBody;
//         }
//
//         if (files)
//         {
//             for(var i=0; i<files.length; i++)
//                 refMsg.AddAttachment(files[i]);
//         }
//
//         refMsg.Send();
//     }
//     catch(e)
//     {
//         WScript.Echo("SendMail error !!! : " + e.description);
//         WScript.Quit(1);
//     }
// }
//
//
//
// let form = document.forms.messageMe;
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // this.elements.forEach = Array.prototype.forEach;
//     console.log(this);
//     let str = "";
//     for(let i = 0; i < form.elements.length; i++) {
//         console.log(form.elements[i].value);
//         str += form.elements[i].value;
//     }
//     // this.elements.forEach((elem) => {
//     //     return elem.value;
//     // })
//     console.log(str);
// });