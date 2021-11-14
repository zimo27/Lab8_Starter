// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isphonenum
test('is phone number', () => {
    expect(functions.isPhoneNumber('(858)888-8898')).toBe(true);
  });

test('is phone number', () => {
    expect(functions.isPhoneNumber('(888)888-0000')).toBe(true);
});

test('is not phone number', () => {
    expect(functions.isPhoneNumber('(858)8886-888')).toBe(false);
  });

test('is not phone number', () => {
    expect(functions.isPhoneNumber('(888)888-00')).toBe(false);
});

// isemail
test('is email', () => {
    expect(functions.isEmail('a@b.com')).toBe(true);
});

test('is email', () => {
    expect(functions.isEmail('a@b.cn')).toBe(true);
});

test('is not email', () => {
    expect(functions.isEmail('a@bcom')).toBe(false);
});

test('is not email', () => {
    expect(functions.isEmail('a@b.cssn')).toBe(false);
});

// is stong password
test('is stong password', () => {
    expect(functions.isStrongPassword('p890uio')).toBe(true);
  });

test('is stong password', () => {
    expect(functions.isStrongPassword('p890uiasdaw_o')).toBe(true);
});

test('is not stong password', () => {
    expect(functions.isStrongPassword('p8o')).toBe(false);
  });

test('is not stong password', () => {
    expect(functions.isStrongPassword('p890uiasdasdasdasasdaw_o')).toBe(false);
});

// is date
test('is date', () => {
    expect(functions.isDate('11/22/2001')).toBe(true);
});

test('is date', () => {
    expect(functions.isDate('99/99/9999')).toBe(true);
});

test('is not date', () => {
    expect(functions.isDate('9/999/9')).toBe(false);
});

test('is not date', () => {
    expect(functions.isDate('9/9/999')).toBe(false);
});

// is hex color
test('is hex color', () => {
    expect(functions.isHexColor('000')).toBe(true);
});

test('is hex color', () => {
    expect(functions.isHexColor('FFF000')).toBe(true);
});

test('is not Hex color', () => {
    expect(functions.isHexColor('#ty')).toBe(false);
});

test('is not Hex color', () => {
    expect(functions.isHexColor('4956')).toBe(false);
});