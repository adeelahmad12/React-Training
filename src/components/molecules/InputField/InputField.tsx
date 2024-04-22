// import React, { useState, useEffect } from "react";

interface InputFieldProps {
    type: string;
    placeholder: string;
    name: string;
    id: string;
    value: string;
    onchange: (event: any) => void;
}

export default function InputField({
    type,
    placeholder,
    name,
    id,
    value,
    onchange,
}: InputFieldProps) {
    return (
        <>
           <input 
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={onchange}
            />
        </>
    );
}