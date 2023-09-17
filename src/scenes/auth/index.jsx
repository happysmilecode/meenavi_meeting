import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Components from "./component/index";
import { TEXT_CONSTANTS } from "../../data/textData";
import { setValue } from "../../data/utils";

export const AuthPage = () => {
  const navigate = useNavigate();

  const [isSigned, setIsSigned] = useState(false);
  const [lang, setLang] = useState("EN");
  const [isFailed, setIsFailed] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    l_email: "",
    l_password: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    setValue("login", true);
    setTimeout(() => (window.location.href = "/"), 1000);
  };

  const handleRegister = () => {
    console.log("register clicked");
  };

  return (
    <Components.AuthContainer>
      <Components.Container>
        <Components.SignUpContainer signin={isSigned.toString()}>
          <Components.Form>
            <Components.Title>
              {TEXT_CONSTANTS[lang].create_account}
            </Components.Title>
            <Components.Input
              isvalid={isFailed.toString()}
              name="name"
              type="text"
              placeholder={TEXT_CONSTANTS[lang].username}
              value={user.name}
              onChange={handleInputChange}
            />
            <Components.Input
              isvalid={isFailed.toString()}
              name="email"
              value={user.email}
              onChange={handleInputChange}
              type="email"
              placeholder={TEXT_CONSTANTS[lang].email}
            />
            <Components.Input
              isvalid={isFailed.toString()}
              name="password"
              value={user.password}
              onChange={handleInputChange}
              type="password"
              placeholder={TEXT_CONSTANTS[lang].password}
            />
            <Components.Button>{TEXT_CONSTANTS[lang].join}</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signin={isSigned.toString()}>
          <Components.Form>
            <Components.Title>{TEXT_CONSTANTS[lang].login}</Components.Title>
            <Components.Input
              isvalid={isFailed.toString()}
              onChange={handleInputChange}
              type="email"
              name="l_email"
              placeholder={TEXT_CONSTANTS[lang].email}
            />
            <Components.Input
              isvalid={isFailed.toString()}
              onChange={handleInputChange}
              type="password"
              name="l_password"
              placeholder={TEXT_CONSTANTS[lang].password}
            />
            <Components.Anchor href="#">
              {TEXT_CONSTANTS[lang].forgot_password}
            </Components.Anchor>
            <Components.Button onClick={handleLogin}>
              {TEXT_CONSTANTS[lang].login}
            </Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signin={isSigned.toString()}>
          <Components.Overlay signin={isSigned.toString()}>
            <Components.LeftOverlayPanel signin={isSigned.toString()}>
              <Components.Title>
                {TEXT_CONSTANTS[lang].login_title}
              </Components.Title>
              <Components.Paragraph>
                {TEXT_CONSTANTS[lang].login_description}
              </Components.Paragraph>
              <Components.GhostButton onClick={() => setIsSigned(true)}>
                {TEXT_CONSTANTS[lang].login}
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signin={isSigned.toString()}>
              <Components.Title>
                {TEXT_CONSTANTS[lang].register_title}
              </Components.Title>
              <Components.Paragraph>
                {TEXT_CONSTANTS[lang].register_description}
              </Components.Paragraph>
              <Components.GhostButton onClick={() => setIsSigned(false)}>
                {TEXT_CONSTANTS[lang].join}
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.AuthContainer>
  );
};
