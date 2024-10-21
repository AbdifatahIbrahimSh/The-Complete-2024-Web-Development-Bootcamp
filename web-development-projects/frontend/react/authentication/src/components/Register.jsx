import React from "react";
import Input from "./Input";


export default function Login() {
    return (
        <form action="">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <Input type="submit" value="Register"/>
        </form>
    );
}