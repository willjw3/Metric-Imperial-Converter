/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });

    test('Decimal Input', function(done) {
      var input = '5.8L';
      var input2 = '5..8L';
      assert.isNotNaN(convertHandler.getNum(input));
      done();
    });

    test('Fractional Input', function(done) {
      var input = '3/4L';
      assert.isNumber(convertHandler.getNum(input));
      done();
    });

    test('Fractional Input w/ Decimal', function(done) {
      var input = '5.3/5L';
      assert.isNumber(convertHandler.getNum(input));
      done();
    });

    test('Invalid Input (double fraction)', function(done) {
      var input = '2/5/5L';
      assert.isNumber(convertHandler.getNum(input));
      done();
    });

    test('No Numerical Input', function(done) {
       var input = 'L';
       assert.equal(convertHandler.getNum(input), 1);
       done();
    });

  });

  suite('Function convertHandler.getUnit(input)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase());
      });
      done();
    });

    test('Unknown Unit Input', function(done) {
      var input = '6.4galon';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });

  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.spellOutUnit(unit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      done();
    });

  });

  suite('Function convertHandler.convert(num, unit)', function() {

    test('Gal to L', function(done) {
      var input = [5, 'L'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1); //0.1 tolerance
      done();
    });

    test('L to Gal', function(done) {
      var input = [18.9721, 'gal'];
      var expected = 5.0;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
    });

    test('Mi to Km', function(done) {
      var input = [5, 'km'];
      var expected = 8.047;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
    });

    test('Km to Mi', function(done) {
      var input = [8.0467, 'mi'];
      var expected = 5.0;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
    });

    test('Lbs to Kg', function(done) {
      var input = [10, 'kg'];
      var expected = 4.536;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
    });

    test('Kg to Lbs', function(done) {
      var input = [4.53592, 'lbs'];
      var expected = 10.0;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
    });

  });

});
