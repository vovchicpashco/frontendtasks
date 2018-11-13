/*function sum (a, b) {
  z =  document.forms['testform'].rec.value = parseFloat(a) + parseFloat(b);

    return z;
};

function operation() {
    document.forms['testform'].tmp.value = document.forms['testform'].rec.value;
    document.forms['testform'].op.value = document.forms['testform'].btn_plus.value;
    document.forms['testform'].rec.value = ""; 
};

function getResult (a, b, o) {
     
    if (o == "+") {
        return parseFloat(a) + parseFloat(b);
    } else if (o == "-") {
        return parseFloat(a) - parseFloat(b);
    } else if (o == "*") {
        return parseFloat(a) * parseFloat(b);
    } else if (o == "/") {
        return parseFloat(a) / parseFloat(b);
    }
    
};*/
function addition(a) {
    a = document.forms["testform"].btnPlus.value;
    var f = document.forms["testform"].flag.value;
      if (document.forms["testform"].flag.value == "false") {
        document.forms["testform"].tmp.value = document.forms["testform"].res.value;
        document.forms["testform"].op.value = a;
        document.forms["testform"].res.value = "";
        document.forms["testform"].flag.value = "true";
        console.log(document.forms["testform"].flag.value);
      }else {
        document.forms["testform"].tmp.value = parseFloat(document.forms["testform"].tmp.value) + parseFloat(document.forms["testform"].res.value);
        console.log(document.forms["testform"].flag.value);
        }
  };
  function subtraction(a) {
    a = document.forms["testform"].btnMinus.value;
    var f = document.forms["testform"].flag.value;
      if (document.forms["testform"].flag.value == "false") {
        document.forms["testform"].tmp.value = document.forms["testform"].res.value;
        document.forms["testform"].op.value = a;
        document.forms["testform"].res.value = "";
        document.forms["testform"].flag.value = "true";
        console.log(document.forms["testform"].flag.value);
      }else {
        document.forms["testform"].tmp.value = parseFloat(document.forms["testform"].tmp.value) - parseFloat(document.forms["testform"].res.value);
        console.log(document.forms["testform"].flag.value);
        }
  };
  function multipl(a) {
    a = document.forms["testform"].btnMultiple.value;
    var f = document.forms["testform"].flag.value;
      if (document.forms["testform"].flag.value == "false") {
        document.forms["testform"].tmp.value = document.forms["testform"].res.value;
        document.forms["testform"].op.value = a;
        document.forms["testform"].res.value = "";
        document.forms["testform"].flag.value = "true";
        console.log(document.forms["testform"].flag.value);
      }else {
        document.forms["testform"].tmp.value = parseFloat(document.forms["testform"].tmp.value) * parseFloat(document.forms["testform"].res.value);
        console.log(document.forms["testform"].flag.value);
        }
  };
  function divide(a) {
    a = document.forms["testform"].btnDivide.value;
    var f = document.forms["testform"].flag.value;
      if (document.forms["testform"].flag.value == "false") {
        document.forms["testform"].tmp.value = document.forms["testform"].res.value;
        document.forms["testform"].op.value = a;
        document.forms["testform"].res.value = "";
        document.forms["testform"].flag.value = "true";
        console.log(document.forms["testform"].flag.value);
      }else {
        document.forms["testform"].tmp.value = parseFloat(document.forms["testform"].tmp.value) / parseFloat(document.forms["testform"].res.value);
        console.log(document.forms["testform"].flag.value);
        }
  };
  
  function getResult(tmp,res,op){
    document.forms["testform"].flag.value = false;
    console.log(document.forms["testform"].flag.value);
    if(op === "+") {
      return parseFloat(tmp) + parseFloat(res);
    }else if (op === "-") {
      return parseFloat(tmp) - parseFloat(res);
    }else if (op === "/") {
      return parseFloat(tmp) / parseFloat(res);
    }else if (op === "*") {
      return parseFloat(tmp) * parseFloat(res);
    }else {
      return undefined;
    }
  };
  
  function myFunc(){
    var flag = document.forms["testform"].flag.value;
    if (flag != false) {
      flag = true;
        console.log(flag);
    }else {
      flag = false;
      console.log(flag)
    }
    document.forms["testform"].flag.value
  };
  