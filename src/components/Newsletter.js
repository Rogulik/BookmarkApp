import React,{ useState,useEffect } from 'react'
import { ReactComponent as Error } from '../images/icon-error.svg'
import CountUp from 'react-countup';
import '../styles/newsletter.scss'

const Newsletter = () => {
        const [emailValue, setEmailValue] = useState("");
        const [formErrors, setFormErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);

      const submitForm = () => {
        console.log(emailValue);
      };
    
     const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailValue(value);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(emailValue));
        setIsSubmitting(true);
      };
    
    const validate = (value) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!value) {
          errors.email = "Cannot be blank";
        } else if (!regex.test(value)) {
          errors.email = "Whoops, make sure it's an email";
        }
        return errors;
      };
    
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
          submitForm();
        }
      }, [formErrors]);

    return (
        <section className="newsletter">
            <p className="newsletter__counter">
              <CountUp
              start={35000}
              end={0}
              duration={30}
              separator= "."
              /> 
              + ALREADY JOINED
              </p>
            <h2 className="heading-2 heading-2--white newsletter__header">Stay up-to-date with what we're doing</h2>
            <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
                <div className="newsletter__input-container">
                    <input
                    placeholder="Enter your emial address" 
                    type="email" id="email" 
                    name="email" 
                    className={Object.keys(formErrors).length === 0 ? "newsletter__input" : "newsletter__input newsletter__input-invalid"} 
                    value={emailValue}
                    onChange={handleChange}
                    required/>
                    {formErrors.email && (
                        <>
                            <Error className="newsletter__error-icon"/>
                            <span className="newsletter__error">{formErrors.email}</span>
                        </>
                    )}
                </div>
                <button className="btn btn--secondary newsletter__button" type="submit">Contact us</button> 
            </form>
        </section>
    )
}

export default Newsletter
