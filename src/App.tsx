import { useState } from "react";
import styled from "styled-components";
import { FlashMessage, Heading, Input, PrimaryButton } from "smarthr-ui";

export const App: React.FC<Record<string, unknown>> = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("Hello");
  return (
    <>
      <Header>
        <Heading>Let&apos;s optimize your React application</Heading>
      </Header>
      <Main>
        <Flex>
          <Input
            value={text}
            width="30rem"
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <PrimaryButton onClick={() => setVisible(true)}>
            Show a flash message
          </PrimaryButton>
        </Flex>
        <FlashMessage
          text={text}
          visible={visible}
          type="success"
          onClose={() => setVisible(false)}
        />
      </Main>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

const Header = styled.header`
  width: 100%;
  padding: 1rem;
`;

const Main = styled.main`
  padding: 1rem;
`;
