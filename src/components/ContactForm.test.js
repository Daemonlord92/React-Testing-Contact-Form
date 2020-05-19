import React from "react";
import { render, fireEvent } from '@testing-library/react';
import ContactForm from "./ContactForm";

test("firstName, lastName, email, message inputs are rendered", () => {
    const { getByText } = render(<ContactForm/>)

    getByText(/first name/i);
    getByText(/last name/i);
    getByText(/email/i);
    getByText(/message/i);
});

test("fields are rendered and functional", () => {
    const { getByText, getByTestId } = render(<ContactForm/>);

    const firstNameInput = getByText(/firstname/i);
    const lastNameInput = getByText(/lastname/i);
    const emailInput = getByText(/email/i);
    const messageInput = getByText(/message/i);

    fireEvent.change(firstNameInput, { target: { value: "Mat"}});
    fireEvent.change(lastNameInput, { target: { value: "Martin"}});
    fireEvent.change(emailInput, { target: { value: "matthew-martin@lambdaschool.com"}});
    fireEvent.change(messageInput, { target: { value: "lorem ispus"}});

    expect(firstNameInput.value).toBe("Mat");
    expect(lastNameInput.value).toBe("Martin");
    expect(emailInput.value).toBe("matthew-martin@lambdaschool.com");
    expect(messageInput.value).toBe("lorem ispus");

    fireEvent.click(getByTestId("submit-button"));
})
test("first name takes a longer name", () => {
    const { getByText, getByTestId } = render(<ContactForm/>);

    const firstNameInput = getByText(/first name/i);
    const lastNameInput = getByText(/last name/i);
    const emailInput = getByText(/email/i);
    const messageInput = getByText(/message/i);

    fireEvent.change(firstNameInput, { target: { value: "Matthew"}});
    fireEvent.change(lastNameInput, { target: { value: "Martin"}});
    fireEvent.change(emailInput, { target: { value: "matthew-martin@lambdaschool.com"}});
    fireEvent.change(messageInput, { target: { value: "lorem ispus"}});

    expect(firstNameInput.value).toBe("Mat");
    expect(lastNameInput.value).toBe("Martin");
    expect(emailInput.value).toBe("matthew-martin@lambdaschool.com");
    expect(messageInput.value).toBe("lorem ispus");

    fireEvent.click(getByTestId("submit-button"));
})