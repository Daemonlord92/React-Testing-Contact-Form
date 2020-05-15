import React from "react";
import { render, fireEvent } from '@testing-library/react';
import ContactForm from "./ContactForm";

test("firstName, lastName, email, message inputs are rendered", () => {
    const { getByText } = render(<ContactForm/>)

    getByText(/first name/i);
    getByText(/last name/i);
    getByText(/email/i);
    getByText(/message/i);
})