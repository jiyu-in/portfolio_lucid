import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../data/data.json";
import Projects from "./Projects";
import Drawer from "../component/Drawer";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  max-width: 1280px;
  height: auto;
`;

const Card = styled.div`
  border-radius: 24px;
  padding: 2rem;
  color:#333;
  background: linear-gradient(180deg, #31AD9A 0%, #1e8c7b 100%);
  box-shadow: rgba(0, 0, 0, 0.25) 4px 0 4px,rgba(134, 9, 12, 0.4) 0 4px 2px,1px -3px 3px #0000006e inset,1px 4px 4px #ffffff36 inset;
  box-sizing: border-box;
  transition: transform 0.2s ease;
  cursor: pointer;
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export default function SectionPortfolio() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setProjects(data);
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  return (
    <Root>
      <h2>Portfolio</h2>
      <Grid>
        {projects.map((item, index) => (
          <Card key={index} onClick={() => setSelected(item)}>
            <h3>{item.title}</h3>
          </Card>
        ))}
      </Grid>
      {selected && (
        <Drawer project={selected} onClose={() => setSelected(null)} />
      )}
    </Root>
  );
}