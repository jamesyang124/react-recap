import examples from 'libphonenumber-js/examples.mobile.json';
import { parsePhoneNumber, getExampleNumber, getCountryCallingCode } from 'libphonenumber-js/mobile';

// all methods follow IntlTelInput error return type
export default class PhoneNumberUtils {
  getExampleNumber(country) {
    try {
      return getExampleNumber(country.toUpperCase(), examples).format('E.164');
    } catch (err) {
      console.error('cannot parse from unknown country code', err);
      return '';
    }
  }

  formatNumber(number, country) {
    try {
      if (typeof country === 'undefined') {
        return parsePhoneNumber(number).format('E.164');
      }

      return parsePhoneNumber(number, country.toUpperCase()).format('E.164');
    } catch (err) {
      console.error('cannot parse from unknown country code or number', err);
      return number;
    }
  }

  getDialCode(country) {
    try {
      return getCountryCallingCode(country.toUpperCase());
    } catch (err) {
      console.error('unknown country code', err);
      return false;
    }
  }

  phoneNumberParser(number) {
    try {
      return parsePhoneNumber(number);
    } catch (err) {
      console.error('parse phone number failed', err);
      return null;
    }
  }
}
