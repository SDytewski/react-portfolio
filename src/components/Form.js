import React, { forwardRef, useState, useRef } from "react";

export const Form = forwardRef((props, ref) => {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault(); // stop default page reload

        const formData = new FormData(formRef.current);

        // send to FormSubmit
        const response = await fetch("https://formsubmit.co/sdytewski@gmail.com", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            },
        });

        if (response.ok) {
            setSubmitted(true);
            formRef.current.reset(); // optional: reset form
        } else {
            alert("Oops! Something went wrong.");
        }
    };

    return (
        <div ref={ref}>
            <div className="container" id="contact">
                {submitted ? (
                    <div className="alert alert-primary text-center">
                        ✅ Message sent! Thank you.
                    </div>
                ) : (
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="hidden" name="_captcha" value="false" />
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea
                                    className="form-control"
                                    cols="30"
                                    rows="8"
                                    placeholder="Your message"
                                    name="message"
                                    required
                                ></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <button type="submit" className="btn btn-info">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
});
