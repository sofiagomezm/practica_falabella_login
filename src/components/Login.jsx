import React from "react";
import './login.css'
import logo_falabella from '../assets/logo_falabella.png';
import { Button, Space, ConfigProvider } from 'antd';

const Login = () => {
    return (
        <section className="login_section" id="login">
             <div className="barra_nav">
                <div className="logo_falabella">
                <img className="img_falabella" src={logo_falabella} alt="" />
                </div>
            </div>
        <div className="login_container">
            <div className="login_box">
                <h1>Inicio de Sesión</h1>
                <input type="text" placeholder="correo electrónico"/>
                <input type="password" placeholder="contraseña"/>

                <ConfigProvider
                theme={{
                    token: {
                      colorPrimary: '#000',
                    },
                  }}
                >
                <Space wrap>
                <Button type="primary" size="large" className="button_ant">Ingresar</Button>
                </Space>
                </ConfigProvider>
            </div>
        </div>
        </section>
    )
}

export default Login