/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    var result;
    var numOnly = /[^0-9.?/]/g;
    result = input.replace(numOnly, '');
    console.log(result);
    var checker = result.split('.');
    console.log(checker);
    if (checker.length>2) {return 'invalid number'}
    if (!result) {
      result = 1;
    }
    result = eval(result);
    console.log(result);
    //result = Number(result.join());
    if (isNaN(result)) {
      return 'invalid number';
    }
    return result;
  };

  this.getUnit = function(input) {
    var result;
    var unitOnly = input.replace(/[^a-zA-z]/g, '');
    result = unitOnly.toLowerCase();
    if (result === 'gal' || result === 'gallon' || result === 'gallons'
        || result === 'l' || result === 'liter' || result === 'litre'
        || result === 'liters' || result === 'litres' || result === 'lbs'
        || result === 'lb' || result === 'pound' || result === 'pounds'
        || result === 'kg' || result === 'kilogram' || result === 'kilograms'
        || result === 'mi' || result === 'mile' || result === 'miles'
        || result === 'km' || result === 'kilometer' || result === 'kilometers'
        || result === 'kilometre' || result === 'kilometres') {
          result = result;
        } else { result = 'invalid unit';}
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    if (initUnit === 'gal' || initUnit === 'gallon' || initUnit === 'gallons') {
      result = 'L';
    }
    else if (initUnit === 'l' || initUnit === 'liter' || initUnit === 'litre'
             || initUnit === 'liters' || initUnit === 'litres') {
               result = 'gal';
   }
   else if (initUnit === 'lbs' || initUnit === 'lb' || initUnit === 'pound'
            || initUnit === 'pounds') {
              result = 'kg';
   }
   else if (initUnit === 'kg' || initUnit === 'kilogram' || initUnit === 'kilograms') {
              result = 'lbs';
   }
   else if (initUnit === 'mi' || initUnit === 'mile' || initUnit === 'miles') {
              result = 'km';
   }
   else if (initUnit === 'km' || initUnit === 'kilometer' || initUnit === 'kilometers'
            || initUnit === 'kilometre' || initUnit === 'kilometres') {
              result = 'mi';
   }
   else {result = 'invalid unit';}



    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, returnUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (returnUnit === 'L') {
      result = Number((initNum * galToL).toFixed(5));
    }
    else if (returnUnit === 'gal') {
      result = Number((initNum / galToL).toFixed(5));
    }
    else if (returnUnit === 'kg') {
      result = Number((initNum * lbsToKg).toFixed(5));
    }
    else if (returnUnit === 'lbs') {
      result = Number((initNum / lbsToKg).toFixed(5));
    }
    else if (returnUnit === 'km') {
      result = Number((initNum * miToKm).toFixed(5));
    }
    else if (returnUnit === 'mi') {
      result = Number((initNum / miToKm).toFixed(5));
    }
    else {result = 'invalid number';}
    return result;
  };

  this.message = function(initNum, initUnit) {
    var errMsg;
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      errMsg = 'invalid number and unit';
    }
    else if (initNum === 'invalid number') {errMsg = 'invalid number';}
    else if (initUnit === 'invalid unit') {errMsg = 'invalid unit';}
    return errMsg;
  }

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum === 'invalid number' || initUnit === 'invalid unit') {
      return 'invalid number or unit - try again'
    }
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;

    return result;
  };

}

module.exports = ConvertHandler;
