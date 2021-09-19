const validator = require("validator");
const { default: languages } = require("../system-language/languages");

const schema = {};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'isRequired' }} The rule to check against.
 */
schema.isRequired = (value, rule) => {
  if (!value) {
    return { message: rule.message || languages.Thisfieldisarequiredfield };
  }
  return null;
};

/**
 * value {string} date in YYYY/MM/DD fromat
 * rule {{ type: 'afterDate' },dateSpecified:"YYYY/MM/DD"} The rule to check against.
 */
schema.afterDate = (value, rule) => {
  if (
    validator.isAfter(
      validator.trim(value),
      validator.trim(rule.dateSpecified)
    ) === false
  ) {
    return { message: rule.message || languages.Dateisnotafterspecifieddate };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'alpha' }} The rule to check against.
 */
schema.alpha = (value, rule) => {
  // validator.isAlphaLocales is default parameter
  if (
    validator.isAlpha(validator.trim(value) /* validator.isAlphaLocales */) ===
    false
  ) {
    return {
      message: rule.message || languages.Containscharactersotherthanalphabet,
    };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'alphanumeric' }} The rule to check against.
 */
schema.alphanumeric = (value, rule) => {
  //  validator.isAlphanumericLocales is default parameter
  /**
   * validator.isAlphanumericLocales: choose one of these as the 2nd parameter.
   */
  if (
    validator.isAlphanumeric(
      validator.trim(value),
      "en-US"
      // validator.isAlphanumericLocales,
    ) === false
  ) {
    return {
      message:
        rule.message || languages.Containscharactersotherthanalphabetandnumbers,
    };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'beforeDate' },dateSpecified:"YYYY/MM/DD"} The rule to check against.
 */
schema.beforeDate = (value, rule) => {
  if (
    validator.isBefore(
      validator.trim(value),
      validator.trim(rule.dateSpecified)
    ) === false
  ) {
    return { message: rule.message || languages.Dateisnotbeforespecifieddate };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'bool' }} The rule to check against.
 */
schema.bool = (value, rule) => {
  if (validator.isBoolean(validator.trim(value)) === false) {
    return { message: rule.message || languages.Notaboolean };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'creditCard' }} The rule to check against.
 */
schema.creditCard = (value, rule) => {
  if (validator.isCreditCard(validator.trim(value)) === false) {
    return { message: rule.message || languages.notavalidcard };
  }
  return null;
};

/**
 * value {string} The value to test against rule. eg:- '$1234.00'
 * no space between $ and number and decimal places should always be  2
 * rule {{ type: 'currency' }} The rule to check against.
 */
schema.currency = (value, rule) => {
  if (validator.isCurrency(validator.trim(value)) === false) {
    return { message: rule.message || languages.notavalidcurrencyamount };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {type: 'date' ,format:"DD/MM/YYYY"} format is a string containing any date format
 */
schema.date = (value, rule) => {
  if (validator.isDate(validator.trim(value), rule.format) === false) {
    return {
      message: rule.message || languages.Itsnotavaliddateornotinspecifiedformat,
    };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'divisible' },number:465} The rule to check against.
 * number field may contain any number
 */
schema.divisible = (value, rule) => {
  if (validator.isDivisibleBy(validator.trim(value), rule.number) === false) {
    return {
      message: rule.message || `${languages.Itsnotdivisibleby} ${value.number}`,
    };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'email' }} The rule to check against.
 */
schema.email = (value, rule) => {
  if (validator.isEmail(validator.trim(value)) === false) {
    return { message: rule.message || languages.PleaseenteravalidEmail };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'length' },min:"1",max:"5"} The rule to check against.
 * min and max may contain any number according to needs
 */
schema.length = (value, rule) => {
  if (
    validator.isLength(validator.trim(value), {
      min: rule.min,
      max: rule.max,
    }) === false
  ) {
    return {
      message:
        rule.message ||
        `${languages.IncorrectLengthlengthshouldbebetween} ${rule.min} - ${rule.max}`,
    };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'lowercase' }} The rule to check against.
 */
schema.lowercase = (value, rule) => {
  if (validator.isLowercase(validator.trim(value)) === false) {
    return { message: rule.message || languages.Notinlowercase };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'mobile' }} The rule to check against.
 */
schema.mobile = (value, rule) => {
  //  input string of phone number must contain country code
  //  for example - "+919876543210"
  if (
    validator.isMobilePhone(
      validator.trim(value),
      validator.isMobilePhoneLocales,
      { strictMode: true }
    ) === false
  ) {
    return {
      message: rule.message || languages.Pleaseprovideacorrectphonenumber,
    };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'mongo' }} The rule to check against.
 */
schema.mongo = (value, rule) => {
  if (validator.isMongoId(validator.trim(value)) === false) {
    return { message: rule.message || languages.NotaMongoDBID };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'numeric' }} The rule to check against.
 */
schema.numeric = (value, rule) => {
  if (validator.isNumeric(validator.trim(value)) === false) {
    return { message: rule.message || languages.PleaseenteraNumber };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'uppercase' }} The rule to check against.
 */
schema.uppercase = (value, rule) => {
  if (validator.isUppercase(validator.trim(value)) === false) {
    return { message: rule.message || languages.Notinuppercase };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'url' }} The rule to check against.
 */
schema.url = (value, rule) => {
  if (validator.isURL(validator.trim(value)) === false) {
    return { message: rule.message || languages.NotaURL };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'uuid' }} The rule to check against.
 */
schema.uuid = (value, rule) => {
  if (validator.isUUID(validator.trim(value), 3 || 4 || 5) === false) {
    return { message: rule.message || languages.NotaUUID };
  }
  return null;
};

/**
 * value {string} The value to test against rule.
 * rule {{ type: 'listInclusion' },list:[]} The rule to check against.
 * list is an array
 */
schema.listInclusion = (value, rule) => {
  if (Array.isArray(rule.list)) {
    if (rule.list.includes(value) === false) {
      return { message: rule.message || languages.valueisnotincludedinthelist };
    }
    return null;
  }
  return { message: rule.message || languages.specifiedlistisnotanarray };
};

/**
 * value {string} The value to test against rule.
 * rule { type: 'listExclusion' ,list:[]} The rule to check against.
 * list is an array
 */
schema.listExclusion = (value, rule) => {
  if (Array.isArray(rule.list)) {
    if (rule.list.includes(value)) {
      return {
        message: rule.message || languages.valueisnotexcludedfromthelist,
      };
    }
    return null;
  }
  return { message: rule.message || languages.specifiedliastisnotanarray };
};

module.exports = function validate(value, rules = []) {
  let errors = null;
  // console.log(rules, 'rules');
  for (let i = 0; i < rules.length; i += 1) {
    if (typeof schema[rules[i].type] === "function") {
      errors = schema[rules[i].type](value || "", rules[i]);
      // console.log('hola iserror', schema[rules[i].type](value || '', rules[i]),
      //   rules[i], value == null);
      if (errors != null) {
        return errors;
      }
    }
  }
  return null;
};
