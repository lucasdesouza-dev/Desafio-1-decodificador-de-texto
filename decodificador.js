

function criptografar() {

  const inputText = document.querySelector("#campText")
  const text = inputText.value



  const text1 = text.replace(/a/g, "1")
  const text2 = text1.replace(/b/g, "2")
  const text3 = text2.replace(/c/g, "3")
  const text4 = text3.replace(/y/g, "~")
  const text5 = text4.replace(/e/g, "4")
  const text6 = text5.replace(/f/g, "5")
  const text7 = text6.replace(/g/g, "6")
  const text8 = text7.replace(/h/g, "!")
  const text9 = text8.replace(/i/g, "7")
  const text10 = text9.replace(/j/g, "8")
  const text11 = text10.replace(/k/g, "9")
  const text12 = text11.replace(/l/g, "#")
  const text13 = text12.replace(/m/g, "@")
  const text14 = text13.replace(/n/g, "%")
  const text15 = text14.replace(/z/g, "_")
  const text16 = text15.replace(/p/g, ";")
  const text17 = text16.replace(/q/g, "$")
  const text18 = text17.replace(/r/g, ":")
  const text19 = text18.replace(/w/g, ">")
  const text20 = text19.replace(/t/g, "-")
  const text21 = text20.replace(/u/g, "<")
  const text22 = text21.replace(/v/g, "&")
  const text23 = text22.replace(/w/g, ">")





  console.log(text23)

}
function descriptografar() {

  const inputText = document.querySelector("#campText")
  const text = inputText.value.toString()



  const text1 = text.replace(/1/g, "a")
  const text2 = text1.replace(/2/g, "b")
  const text3 = text2.replace(/3/g, "c")
  const text4 = text3.replace(/~/g, "y")
  const text5 = text4.replace(/4/g, "e")
  const text6 = text5.replace(/5/g, "f")
  const text7 = text6.replace(/6/g, "g")
  const text8 = text7.replace(/!/g, "h")
  const text9 = text8.replace(/7/g, "i")
  const text10 = text9.replace(/8/g, "j")
  const text11 = text10.replace(/9/g, "k")
  const text12 = text11.replace(/#/g, "l")
  const text13 = text12.replace(/@/g, "m")
  const text14 = text13.replace(/%/g, "n")
  const text15 = text14.replace(/_/g, "z")
  const text16 = text15.replace(/;/g, "p")
  const text17 = text16.replace("$", "q")
  const text18 = text17.replace(/:/g, "r")
  const text19 = text18.replace(/>/g, "w")
  const text20 = text19.replace(/-/g, "t")
  const text21 = text20.replace(/</g, "u")
  const text22 = text21.replace(/&/g, "v")






  console.log(text22)

}