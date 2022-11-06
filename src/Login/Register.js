import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core'


import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'

const Register = (Props) => {
    const [errorShadow, setErrorShadow] = useState()
    const [status, setStatus] = useState();
    const [progress, setProgress] = useState(false)
    const [color, setColor] = useState({ color: "green", fontWeight: "bold", fontSize: "10px" });
    const [value, setValue] = useState({
        username: "",
        email: "",
        password: "",
    })
    function progressChange(val) {
        setProgress(val);
    }
    // const statusChange = (val) => {
    //     setStatus(val);
    //     setProgress(false)
    //     setErrorShadow("#008001 0px 7px 29px 0px");
    // }
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
        setErrorShadow("");
        setStatus("");
    }

    const register = async () => {
        const data = {
            value
        }
        await axios.post(`${process.env.REACT_APP_DOMAIN}/register`, data).then((res) => {
            alert(res.data.data.username)
            setColor({ color: "green", fontSize: "13px" });
        }).catch((err) => {
            setStatus(err.response.data.error);
            setProgress(false);
            setColor({ color: "red", fontSize: "13px" });
            setErrorShadow("#ED6418 0px 7px 29px 0px");
        });
    }

    return (
        <div style={{}}>
            <Container maxWidth={"sm"}>
                <Box bgcolor={""} style={{ background: "#F0F0F0", padding: "20px", borderRadius: "5px", boxShadow: errorShadow }}>
                    <Typography variant={"h5"} align={"center"} style={{
                        color: "#ed6418",
                        marginBottom: "20px"
                    }} >
                        Register
                    </Typography>
                    <input
                        onChange={handleChange}
                        name="username"
                        type="text"
                        placeholder="username"
                        value={value.username}
                        style={{ width: "100%", padding: "5px", fontSize: "15px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                    />
                    <input
                        type="email"
                        placeholder='email'
                        name="email"
                        value={value.email}
                        onChange={handleChange}
                        style={{ width: "100%", fontSize: "15px", padding: "5px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                    />
                    <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        value={value.password}
                        placeholder="Password"
                        style={{ width: "100%", padding: "5px", fontSize: "15px", borderRadius: "3px", outline: "none", border: "solid #ed6418 1px", background: "transparent", margin: "10px 0" }}
                    />
                    <br />
                    {/* <Link to="#"> */}
                    <Typography align='center' style={color}>{
                        progress ? <><CircularProgress style={{ fontSize: "10px", width: "20px", height: "20px", color: "#ed6418" }} /></> : status
                    }</Typography>
                    <Button onClick={() => { register(); progressChange(true) }} disableElevation variant="contained" fullWidth style={{ marginTop: "10px", marginBottom: "20px", background: "#ed6418", color: "white" }}>Enter</Button>
                    {/* </Link> */}
                    <span onClick={() => { Props.cb(true) }} style={{ color: "#ed6418", cursor: "pointer" }}>GOTO LOGIN</span>
                </Box>
            </Container>
        </div >
    )
}
export default Register;

