const PasswordCreteria = ({values}) => {

  const rules = {
        length: values.password.length >= 8,
        uppercase: /[A-Z]/.test(values.password),
        lowercase: /[a-z]/.test(values.password),
        number: /[0-9]/.test(values.password),
        special: /[^A-Za-z0-9]/.test(values.password),
    };
    return (
        <ul className="criteria">
        <li className={rules.length ? "valid" : "invalid"}>
          At least 8 characters
        </li>
        <li className={rules.uppercase ? "valid" : "invalid"}>
          One uppercase letter
        </li>
        <li className={rules.lowercase ? "valid" : "invalid"}>
          One lowercase letter
        </li>
        <li className={rules.number ? "valid" : "invalid"}>
          One number
        </li>
        <li className={rules.special ? "valid" : "invalid"}>
          One special character
        </li>
      </ul>
    )
}

export default PasswordCreteria;