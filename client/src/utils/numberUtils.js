export function convertToNepaliDigits(number) {
  const nepaliDigits = ['०','१','२','३','४','५','६','७','८','९'];
  return number.toString().split('').map(char =>
    /\d/.test(char) ? nepaliDigits[parseInt(char)] : char
  ).join('');
}
