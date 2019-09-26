function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YBVjVDubKJ":
        Script1();
        break;
      case "5eS97005SxJ":
        Script2();
        break;
      case "5u2bcGcPaqa":
        Script3();
        break;
      case "5gTOepvGbjB":
        Script4();
        break;
      case "6CzHLaTOKm0":
        Script5();
        break;
      case "5VFAurvst9Y":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

