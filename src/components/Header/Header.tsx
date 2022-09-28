import React from "react";
import { Text } from "../Text";
import Feather from "@expo/vector-icons/Feather";
import { HeaderProps } from "./types";
import { Container, Handlers, Wrapper } from "./styles";
import { useLocale } from "../../hooks";
import { theme } from "../../theme";

export const Header = ({ points }: HeaderProps) => {
  const { lang } = useLocale();
  return (
    <Wrapper>
      <Container>
        <Text>{lang("app_title")}</Text>
        <Handlers>
          <Text>{points}</Text>
          <Feather name="user" color={theme.colors.white} size={20} />
        </Handlers>
      </Container>
    </Wrapper>
  );
};
