/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      console.log('initNum: ' + initNum);
      var initUnit = convertHandler.getUnit(input);
      console.log('initUnit: ' + initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log('returnUnit: ' + returnUnit);
      var returnNum = convertHandler.convert(initNum, returnUnit);
      console.log('returnNum: ' + returnNum);
      var allWrong = convertHandler.message(initNum, initUnit);
      console.log(allWrong);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log('to string: ' + toString);
      if (initNum === 'invalid number' || initUnit === 'invalid unit') {
        return res.send(allWrong);
      }
      return res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit,
                      string: toString});

    });

};
